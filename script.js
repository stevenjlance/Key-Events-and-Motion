let bubble = {
	x: 1,
	y: 50,
	speedX: 1,
	speedY: 1,
}

let bubble2 = {
	x: 250,
	y: 5,
	speedX: 1,
	speedY: 1,
}
function setup() {
  createCanvas(600, 600);
  
}

function draw() {

  background(0)
	strokeWeight(5)
	stroke("white")
	noFill()
	bubble2.speedY = bubble2.speedY + 0.5
	bubble2.y = bubble2.y + bubble2.speedY
	ellipse(bubble2.x, bubble2.y, 50,50)
	//text("SPEED: " + speed, 20, 20)
	if(keyIsPressed){
		if(keyCode == 39){
			bubble.x = bubble.x + bubble.speedX
		}
		if(keyCode == 37){
			bubble.x = bubble.x - bubble.speedX
		}
		if(bubble.x > width){
			bubble.x = 0
		}
		if(bubble.x < 0){
			bubble.x = width
		}
		if(bubble.y < 0){
			bubble.y = height
		}
		if(bubble.y > height){
			bubble.y = 0
		}
		if(keyCode == 40){
			bubble.y = bubble.y + bubble.speedY
		}
		if(keyCode == 38){
			bubble.y = bubble.y - bubble.speedY
		}
		if(keyCode == 32){
			bubble.speedX++
			bubble.speedY++
		}
		if(keyCode == 13){
			bubble.speedX--
			bubble.speedY--
		}
		if(keyCode == 17){
			text("⭐️", random(0, width), random(0,width))
		}
		if(key == "s"){
			bubble.speedX += 1
			bubble.x = bubble.x + bubble.speedX
		}
		if(key == "d" && bubble.speedX > 0){
			bubble.speedX -= 1
			bubble.x = bubble.x + bubble.speedX
		}
		if(key == "z"){
			bubble.speedY += 1
			bubble.y = bubble.y + bubble.speedY
		}
		if(key == "x" && bubble.speedY > 0){
			bubble.speedY -= 1
			bubble.y = bubble.y + bubble.speedY
		}
		
	}
	ellipse(bubble.x, bubble.y, 50, 50)


	

}