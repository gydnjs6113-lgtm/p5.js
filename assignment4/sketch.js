function setup() {
  createCanvas(700, 450);
}
 //콜로세움 벽면
function draw(){
  background(0,255,255)
  fill(random(255), random(255), random(255));
  noStroke()
  quad(0, 20, 370, 20, 580, 400, 0, 400)
  
  //콜로세움 
  noStroke()
  fill(255)
  arc(75, 80, 50, 50, radians(0), radians(360) )
  square(50,80,50)

  arc(175, 80, 50, 50, radians(0), radians(360) )
  square(150,80,50)
 
  arc(275, 80, 50, 50, radians(0), radians(360) )
  square(250,80,50)
  
  arc(75, 190, 50, 50, radians(0), radians(360) )
  square(50,190,50)
  
  arc(175, 190, 50, 50, radians(0), radians(360) )
  square(150,190,50)
 
  arc(275, 190, 50, 50, radians(0), radians(360) )
  square(250,190,50)
 
  arc(375, 190, 50, 50, radians(0), radians(360) )
  square(350,190,50)
  
  arc(75, 300, 50, 50, radians(0), radians(360) )
  square(50,300,50)
  
  arc(175, 300, 50, 50, radians(0), radians(360) )
  square(150,300,50)
  
  arc(275, 300, 50, 50, radians(0), radians(360) )
  square(250,300,50)

  arc(375, 300, 50, 50, radians(0), radians(360) )
  square(350,300,50)
 
  arc(475, 300, 50, 50, radians(0), radians(360) )
  square(450,300,50)
  
  //구름
  let size_change = sin(frameCount * 0.05) * 5

  ellipse(530,200, 50 + size_change, 50 + size_change)
  ellipse(560,200, 50 + size_change, 50 + size_change)
  ellipse(590,200, 50 + size_change, 50 + size_change)
  ellipse(620,200, 50 + size_change, 50 + size_change)
  ellipse(560,180, 60 + size_change, 60 + size_change)
  ellipse(590,180, 60 + size_change, 60 + size_change)
  ellipse(560,220, 60 + size_change, 60 + size_change)
  ellipse(590,220, 60 + size_change, 60 + size_change)
  
  ellipse(450,100,50,50)
  ellipse(480,100,50,50)
  ellipse(510,100,50,50)
  ellipse(550,100,50,50)
  ellipse(480,80,60,60)
  ellipse(520,80,60,60)
  ellipse(480,120,60,60)
  ellipse(520,120,60,60)
  
  //땅바닥
  fill(200,100,0)
  rect(0,400,700)
  
  //잔디
  fill(0,255,0)
  triangle(10, 430, 60, 450, 25, 450)
  triangle(30, 420, 80, 450, 60, 450)
  triangle(150, 410, 100, 450, 90, 450)
  triangle(100, 420, 80, 450, 60, 450)
  triangle(80, 410, 100, 450, 70, 450)
  triangle(120, 400, 110, 450, 90, 450)
  triangle(150, 430, 120, 450, 100, 450)
  triangle(200, 420, 150, 450, 120, 450)
  
  // 움직임 속도 (speed겹쳐서 sp로 교체)
  let sp = 0.1; 
  let petal_angle_1 = sin(frameCount * sp) * 120 + 120;
  let petal_angle_2 = sin((frameCount + 20) * sp) * 160 + 160;

  // 꽃 줄기 (첫 번째 꽃)
  stroke(0)
  strokeWeight(2)
  line(620,350,620,400)
  
  // 꽃잎 (첫 번째 꽃)
  fill(255,125,0)
  noStroke()
  arc(620, 350, 50, 50, 0, radians(petal_angle_1)) 
  
  // 꽃 줄기 (두 번째 꽃)
  stroke(0)
  strokeWeight(2)
  line(660,320,660,400)
  
  // 꽃잎 (두 번째 꽃)
  fill(255,75,0)
  noStroke()
  arc(660, 320, 50, 50, 0, radians(petal_angle_2)) 
  
  //
  fill(200, 0, 200)
  ellipse(700, 0, 300, 300)
  fill(50, 50, 255)
  ellipse(700, 0, 250, 250)
  fill(0, 255, 0)
  ellipse(700, 0, 200, 200)
  fill(255, 255, 0)
  ellipse(700,0,150,150)
  fill(255,0,0)
  ellipse(700,0,100,100)
  

  
}