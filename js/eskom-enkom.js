let movingSpeed = 20;

function checkKey(key) {
  if (key === "w") {
    y -= movingSpeed;
    console.log("w");
  }
  if (key === "s") {
    y += movingSpeed;
    console.log("s");
  }
  if (key === "a") {
    x -= movingSpeed;
    console.log("a");
  }
  if (key === "d") {
    x += movingSpeed;
    console.log("d");
  }
}

function moveMap() {
  if (keyIsPressed) {
    checkKey(key);
    loop();
  } else {
    noLoop(); // desperately trying to defeat loops
  }
} 
