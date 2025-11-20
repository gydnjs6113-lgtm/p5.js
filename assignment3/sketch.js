
// 1: 파란색, 2: 빨간색, 3: 초록색
let capColorState = 1; 

function setup() {
  createCanvas(600, 400); // 캔버스 크기 설정
}

function mouseClicked() {
    capColorState = capColorState + 1;
    if (capColorState > 3) {
        capColorState = 1; // 3단계(초록) 후 다시 1단계(파랑)로 순환
    }
}

function draw() {
  background(230, 230, 250);

  // [ 색상 및 인터랙션 변수 설정 ]
  let skinColor = color(240, 218, 192); // 피부색
  let shirtColor = color(200);
  let hairColor = color(50);
  
  // 모자 색상 결정
  let capColor; 
  if (capColorState === 1) {
    capColor = color(0, 0, 128); // 1단계: 파란색 
  } else if (capColorState === 2) {
    capColor = color(255, 0, 0); // 2단계: 빨간색
  } else {
    capColor = color(0, 150, 0); // 3단계: 초록색
  }

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
  

  fill(255, 0, 0)
  let mouthY = 280;


  if (mouseY < 200) {
      mouthY = 275; 
  } else {
      mouthY = 285;
  }
  
  
  if (mouseIsPressed) {
      arc(300, mouthY, 50, 25, PI, TWO_PI); 
  } else {
      arc(300, mouthY, 50, 25, 0, PI);
  }


  // 코
  fill(240, 200, 180)
  triangle(300, 230, 310, 260, 290, 260)
}