# Key Events and Motion

How do we control the motion of our object rather than have it simply speed up or slow down on it's own? Today we will be combining our knowledge of key events and motion to allow us to control the motion.

You will need to use the non-alphabeticical keys. To do this, we will use `keyCode`. All of the `keyCode` values can be found [HERE](https://keycode.info/)

```javascript
// Declare an object to hold all the values for our bubble
var bubble = {
	x: 50,
	y: 50,
	speedX: 5,
	speedY: 1,
}

function draw() {
	if(keyIsPressed) {
		// If the right arrow is pressed, then move the bubble.
		if(keyCode == 39){
			x = x + speed
		}
	}
	ellipse(x, 50, 50, 50) 
}

```

## Tasks

1. Get the object to move to the right when you click the right arrow.

![](assets/Challenge1.gif)

2. Have the item move left and right when the respective arrow keys are pressed. If the object reaches the edge of the screen, have it reappear on the other side of the screen.

![](assets/Challenge2.gif)

3. Have the item move up and down when the respective arrow keys are pressed. If the object reaches the edge of the screen, have it reappear on the other side of the screen.

![](assets/Challenge3.gif)

4. The user wants to be able to increase and decrease the speed. When the user presses the spacebar, increase the speed. When the user pressed enter, decrease the speed

![](assets/Challenge4.gif)

5. Create a new bubble. Have it speed up as it falls down the page. **REMEMBER**: You need to create a new object to handle the new values for this second bubble!

![](assets/Challenge5.gif)

6. When the “s” key is pressed have the ellipse speed up. When the “d” key is pressed have the ellipse slow down. Both should move the bubble to the right. **NOTE**: This is different from Challenge #5. In this challenge, the object should speed up as it moves.  

![](assets/Challenge6.gif)

7. Repeat Challenge #6, but for the y direction. Use the “z” key to speed up in the y direction and the “x” key to slow down.

![](assets/Challenge7.gif)