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

var minZoom = -1.5;    // Can be changed to move the 'camera' position but implementing a way to change dynamically causes performance issues
var maxZoom = 1.5;

function setup() {
    createCanvas(400,300);   // A smaller canvas produces much better performance as the number of pixels is lower
    pixelDensity(1);
    colorMode(HSB);        // Makes converting from HSB to RGB simpler
    noCursor();

    Mandelbrot = createCheckbox("Show Mandelbrot set");
    ColourMode = createCheckbox("Simple colour mode");
    maxIterations = createSlider(10, 200, 70, 1);
}


function draw() {

    var maxIter = maxIterations.value();

    var cx = map(mouseX, 0, width, -1, 1);       // c = cx + icy
    var cy = map(mouseY, 0, height, -1, 1);        // Uses mouse position

    loadPixels();

    for (var i = 0; i < width; i++) {  // Cycle over the y pixels
        for (var j = 0; j < height; j++) {         // Cycle over the x pixels

            var a = map(i, 0, width, minZoom, maxZoom);          // z = a + bi
            var b = map(j, 0, height, minZoom, maxZoom);
            var n = 0;

            if (Mandelbrot.checked()) {
                aold = a;
                bold = b;
            }

            while (n < maxIter) {     // Potential issue with n not returning right number, test or change to while loop
                var a_sq = a * a;
                var b_sq = b * b;
                var two_ab = 2 * a * b;

                if (a_sq + b_sq > 4) {
                    break;      // Points must lie within circle of radius 4 to be considered not divergent
                }

                if (Mandelbrot.checked()) {
                    a = a_sq - b_sq + aold;     // z^2 = a^2 - b^2 + 2abi, f(z) = z^2 + c
                    b = two_ab + bold;
                } else {
                    a = a_sq - b_sq + cx;     // z^2 = a^2 - b^2 + 2abi, f(z) = z^2 + c
                    b = two_ab + cy;
                }

                n++
            }

            var pix = (i + j * width) * 4;   // Access a pixel at position i, j on the screen

            if (ColourMode.checked()) {
                if (n === maxIter) {  // Set to white
                    pixels[pix + 3] = 0;     //Alpha
                } else {                                      // Simple colour mode needs much fewer calculations
                    var Bright = map(n, 0, maxIter, 0, 1);
                    Bright = map(sqrt(Bright), 0, 1, 0, 255);

                    pixels[pix] = Bright;  //R or Hue
                    pixels[pix + 1] = 100;  //G or Saturation
                    pixels[pix + 2] = 100;  //B or Brightness
                    pixels[pix + 3] = 255;     //Alpha
                }
            } else {
                if (n === maxIter) {  // Set to black (very dark grey, too black looks ugly)
                    pixels[pix] = 0;  //R
                    pixels[pix + 1] = 0;  //G
                    pixels[pix + 2] = 0;  //B
                    pixels[pix + 3] = 220;     //Alpha
                } else {
                    var Hue = map(sqrt(n/maxIter), 0, 1, 0, 360);     // Use HSB colour values as it can cycle through all colours using only 1 variable

                    var col = color(Hue, 78, 100);

                    pixels[pix] = red(col);  //R
                    pixels[pix + 1] = blue(col);  //G
                    pixels[pix + 2] = green(col);  //B
                    pixels[pix + 3] = 255;     //Alpha
                }
            }


        }

    }
    updatePixels();
}

