/**
 * Created by Jack on 30/03/2017.
 */
//
// var y = 100;
//
// // execute once when the program begins
// function setup() {
//     // createCanvas must be the first statement
//     createCanvas(720, 400);
//     stroke(255);     // Set line drawing color to white
//     frameRate(30);
// }
// // The statements in draw() are executed until the
// // program is stopped. Each statement is executed in
// // sequence and after the last line is read, the first
// // line is executed again.
// function draw() {
//     background(0);   // Set the background to black
//     y = y - 1;
//     if (y < 0) {
//         y = height;
//     }
//     line(0, y, width, y);
// }

// var angle = 0;
//
// function setup() {
//     size(640, 360);
//     colorMode(HSB, 1);
// }
//
// function draw() {
//
//     // float ca = map(mouseX, 0, width, -1, 1);//-0.70176;
//     // float cb = map(mouseY, 0, height, -1, 1);//-0.3842;
//
//     var ca = -0.4;
//     var cb = 0.6;
//
//     angle += 0.02;
//
//     background(255);
//
//     // Establish a range of values on the complex plane
//     // A different range will allow us to "zoom" in or out on the fractal
//
//     // It all starts with the width, try higher or lower values
//     //float w = abs(sin(angle))*5;
//     var w = 5;
//     var h = (w * height) / width;
//
//     // Start at negative half the width and height
//     var xmin = -w/2;
//     var ymin = -h/2;
//
//     // Make sure we can write to the pixels[] array.
//     // Only need to do this once since we don't do any other drawing.
//     loadPixels();
//
//     // Maximum number of iterations for each point on the complex plane
//     var maxiterations = 100;
//
//     // x goes from xmin to xmax
//     var xmax = xmin + w;
//     // y goes from ymin to ymax
//     var ymax = ymin + h;
//
//     // Calculate amount we increment x,y for each pixel
//     var dx = (xmax - xmin) / (width);
//     var dy = (ymax - ymin) / (height);
//
//     // Start y
//     var y = ymin;
//     for (var j = 0; j < height; j++) {
//         // Start x
//         var x = xmin;
//         for (var i = 0; i < width; i++) {
//
//             // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
//             var a = x;
//             var b = y;
//             var n = 0;
//             while (n < maxiterations) {
//                 var aa = a * a;
//                 var bb = b * b;
//                 // Infinity in our finite world is simple, let's just consider it 16
//                 if (aa + bb > 4.0) {
//                     break;  // Bail
//                 }
//                 var twoab = 2.0 * a * b;
//                 a = aa - bb + ca;
//                 b = twoab + cb;
//                 n++;
//             }
//
//             // We color each pixel based on how long it takes to get to infinity
//             // If we never got there, let's pick the color black
//             if (n === maxiterations) {
//                 pixels[i+j*width] = color(0);
//             } else {
//                 // Gosh, we could make fancy colors here if we wanted
//                 var hu = Math.sqrt(n / maxiterations);
//                 pixels[i+j*width] = color(hu, 255, 150);
//             }
//             x += dx;
//         }
//         y += dy;
//     }
//     updatePixels();
//     //println(frameRate);
// }
//
// var minval = -0.5;
// var maxval = 0.5;
//
// var ca = -0.4;
// var cb = 0.6;
//
// var minSlider;
// var maxSlider;
//
// var frDiv;
//
// function setup() {
//     createCanvas(200, 200);
//     pixelDensity(1);
//
//     minSlider = createSlider(-2.5, 0, -2.5, 0.01);
//     maxSlider = createSlider(0, 2.5, 2.5, 0.01);
//
//     frDiv = createDiv('');
// }
//
// function draw() {
//     var maxiterations = 100;
//
//     loadPixels();
//     for (var x = 0; x < width; x++) {
//         for (var y = 0; y < height; y++) {
//
//             var a = map(x, 0, width, minSlider.value(), maxSlider.value());
//             var b = map(y, 0, height, minSlider.value(), maxSlider.value());
//
//             //var ca = a;
//             //var cb = b;       Mandelbrot set
//
//             var n = 0;
//
//             while (n < maxiterations) {
//                 var aa = a * a - b * b;
//                 var bb = 2 * a * b;
//                 a = aa + ca;
//                 b = bb + cb;
//                 if (a * a + b * b > 16) {
//                     break;
//                 }
//                 n++;
//             }
//
//             var bright = map(n, 0, maxiterations, 0, 1);
//             bright = map(sqrt(bright), 0, 1, 0, 255);
//
//             if (n == maxiterations) {
//                 bright = 0;
//             }
//
//             var pix = (x + y * width) * 4;
//             pixels[pix + 0] = bright;
//             pixels[pix + 1] = bright;
//             pixels[pix + 2] = bright;
//             pixels[pix + 3] = 255;
//         }
//     }
//     updatePixels();
//
//     //frDiv.html(floor(frameRate()));
// }

function setup() {
    createCanvas(360, 240);
    pixelDensity(1);

    loadPixels();

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var pix = (x + y * width) * 4;
            pixels[pix + 0] = 51;   // R
            pixels[pix + 1] = 51;   // G
            pixels[pix + 2] = 51;   // B
            pixels[pix + 3] = 255;  // Alpha
        }
    }
    updatePixels();
}




