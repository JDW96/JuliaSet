/**
 * Created by Jack on 29/03/2017.
 */

/***************

 Julia Set Maths Background:

 f(z) = z^2 + c       where c is a complex constant.

 This can be iterated by using old z as the input for new z.
 Let each pixel represent a z value in the complex plane, x + iy.
 Iterate the function for each pixel (ideally an infinite number of times however limited by computing power)
 Record the number of iterations taken for the point to leave a circle of radius two
 Colour the pixel based on the number of iterations

 ***************/

var minZoom = -1.5;
var maxZoom = 1.5;

function setup() {
    createCanvas(450,350);
    pixelDensity(1);
    colorMode(HSB);
    noCursor();

    var Mandelbrot = createCheckbox("Show Mandelbrot set?");
}


function draw() {

    var maxIterations = 50;

    var cx = map(mouseX, 0, width, -1, 1);       // c = cx + icy
    var cy = map(mouseY, 0, height, -1, 1);        // Uses mouse position

    loadPixels();

    for (var i = 0; i < width; i++) {  // Cycle over the y pixels
        for (var j = 0; j < height; j++) {         // Cycle over the x pixels

            var a = map(i, 0, width, minZoom, maxZoom);          // z = a + bi
            var b = map(j, 0, height, minZoom, maxZoom);
            var n = 0;

            while (n < maxIterations) {     // Potential issue with n not returning right number, test or change to while loop
                var a_sq = a * a;
                var b_sq = b * b;
                var two_ab = 2 * a * b;

                if (a_sq + b_sq > 4) {
                    break;      // Points must lie within circle of radius 4 to be considered not divergent
                }

                a = a_sq - b_sq + cx;     // z^2 = a^2 - b^2 + 2abi, f(z) = z^2 + c
                b = two_ab + cy;
                n++
            }

            var pix = (i + j * width) * 4;   // Access a pixel at position i, j on the screen

            if (n === maxIterations) {  // Set to white
                pixels[pix] = 0;  //R
                pixels[pix + 1] = 0;  //G
                pixels[pix + 2] = 0;  //B
                pixels[pix + 3] = 220;     //Alpha
            } else {
                var Hue = map(sqrt(n/maxIterations), 0, 1, 0, 360);

                col = color(Hue, 78, 100);

                pixels[pix] = red(col);  //R or Hue
                pixels[pix + 1] = blue(col);  //G or Saturation
                pixels[pix + 2] = green(col);  //B or Brightness
                pixels[pix + 3] = 255;     //Alpha
            }

        }

    }
    updatePixels();
}

