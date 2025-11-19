function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(230, 230, 250);

  // 색상 설정
  let skinColor = color(240, 218, 192);
  let shirtColor = color(200);
  let hairColor = color(50);
  let capColor = color(0, 0, 128);
  

  // 긴 머리
  fill(hairColor);
  noStroke();

  // 왼쪽 머리카락
  rect(200, 170, 80, 170);

  // 오른쪽 머리카락
  rect(320, 170, 80, 170);

  // 얼굴
  fill(skinColor);
  ellipse(300, 200, 180, 230);

  // 모자
  fill(capColor);
  arc(300, 180, 200, 210, radians(180), radians(360));
  fill(255)
  rect(275, 150, 50, 20); 

  // 상의
  fill(shirtColor);
  rect(220, 320, 160, 130) 
  arc(220, 370, 65, 100, PI, TWO_PI) 
  arc(380, 370, 65, 100, PI, TWO_PI) 

  // 목
  fill(skinColor);
  rect(275, 280, 50, 70, 20) 

  // 팔
  fill(skinColor);
  rect(200, 370, 20, 120) 
  rect(380, 370, 20, 120) 

  // 귀
  fill(skinColor);
  ellipse(210, 215, 25, 35)
  ellipse(390, 215, 25, 35)
  
  // 쌍커풀
  stroke(0)
  strokeWeight(2)
  arc(256, 219, 23, 10, PI, TWO_PI)
  arc(344, 219, 23, 10, PI, TWO_PI) 

  // 눈썹
  stroke(0)
  strokeWeight(2)
  arc(255, 210, 50, 10, PI, TWO_PI)
  arc(345, 210, 50, 10, PI, TWO_PI)

  // 눈
  fill(hairColor);
  noStroke();
  ellipse(260, 230, 22, 34)
  ellipse(340, 230, 22, 34)

  // 입술
  fill(255, 0, 0)
  arc(300, 280, 50, 25, 0, PI)

  // 코
  fill(240, 200, 180)
  triangle(300, 230, 310, 260, 290, 260)
}
