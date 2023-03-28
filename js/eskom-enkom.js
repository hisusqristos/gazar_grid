let movingSpeed = 20

function checkKey(key) {
  if (key === "w") {
    y -= movingSpeed;
    redraw();
  }
  if (key === "s") {
    y += movingSpeed;
    redraw();
  }
  if (key === "a") {
    x -= movingSpeed;
    redraw();
  }
  if (key === "d") {
    x += movingSpeed;
    redraw();
  }
}

function eskomEnkom() {
  if (keyIsPressed) {
    checkKey(key);
  }
}
