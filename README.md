#Class Spirograph

inherits from object

###Constructor
Spirograph(R, r, rho)
Creates a spirograph with static circle of radius R, moving circle with size r and pen placed rho from the centre of the moving circle.

###Fields
Field|Description|Type
-----|-----------|----
R|The size of the static circle|int
r|The size of the moving circle|int
rho|The distance of the pen from the centre of the moving circle|float


###Methods
Method | Description | Returns
-------|-------------|--------
draw(g)|Draws the spirograph on the canvas or the p5 renderer g|null
setr(r)|Sets the field r|null
setR(R)|Sets the field R|null
setRBG(r, g, b)|Sets the brush colour based on RGB values ranging from 0-255|null

#Example
The image produced below is the result of the draw() method. The form changed the realavent paramaters. If left blank there will be no change for that variable.

#Source
Built using code by CarlosPonce found in Spirograph under the Creative Commons Attribution ShareAlike 