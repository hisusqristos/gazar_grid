let pxs = 20

function checkKey(key) {
  if (key === "w") {
    y -= pxs;
    redraw();
  }
  if (key === "s") {
    y += pxs;
    redraw();
  }
  if (key === "a") {
    x -= pxs;
    redraw();
  }
  if (key === "d") {
    x += pxs;
    redraw();
  }
}

function eskomEnkom() {
  if (keyIsPressed) {
    checkKey(key);
  }
}
