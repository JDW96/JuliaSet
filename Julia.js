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

 var cx;
 var cy;
 var maxIterations;
 var width = 2.5;
 var height = 2.5;
 var xmin = -width/2;
 var xmax = width/2;
 var ymin = -height/2;
 var ymax = height/2


 function JuliaSet() {
     for (i = 0; i < 100; i++) {

     }
 }
