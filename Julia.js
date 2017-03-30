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

function setup() {
    createCanvas(500,400);
    pixelDensity(1);
}

var cx = -0.4;       // c = cx + icy
var cy = 0.6;        // Hope to add sliders to change this
var maxIterations;
var w = 5;
var h = (w * height) / width;
var xmin = -w/2;
var xmax = w/2;
var ymin = -h/2;
var ymax = h/2;

var xchange = w / width;
var ychange = h / height;


function draw() {

    var yinit = ymin;
    loadPixels();

    for (i = 0; i < height; i++) {  // Cycle over the y pixels

        var xinit = xmin;              // Reset x after each row is completed

        for (j = 0; j < width; j++) {         // Cycle over the x pixels

            var a = xinit;          // z = a + bi
            var b = yninit;

            for (n = 0; n < maxIterations; n++) {     // Potential issue with n not returning right number, test or change to while loop
                var a_sq = a*a;
                var b_sq = b*b;
                var two_ab = 2*a*b;

                if (a_sq + b_sq > 4) {
                    break;      // Points must lie within circle of radius 4 to be considered not divergent
                }


                a = a_sq - b_sq + cx;     // z^2 = a^2 - b^2 + 2abi, f(z) = z^2 + c
                b = two_ab + cy;

            }

        }
    }
    updatePixels();
}
