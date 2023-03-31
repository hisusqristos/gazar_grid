const tileSize = 16;
const noiseScale = 0.1;
const buffer = 0;

const colors = {
  gazar: "#FE6244",
  kaxamb: "#1F8A70",
  avaz: "#F5F0BB",
};

let proportions = {
  grass: 0.4,
  forest: 0.47,
  dasht: 0.3,
  sand: 0.5,
  water: 1,
};

var x = 0;
var y = 0;
var cols = 0;
var rows = 0;
var xRO = 0;
var yRO = 0;

const tiles = [];

function setup() {
  createCanvas(300, 500);
  cols = width / tileSize + buffer;
  rows = height / tileSize + buffer;

  stroke("#3B5249");
  strokeWeight(4);
  drawTerrain();
}

function drawTerrain() {
  xRO = x % tileSize;
  yRO = y % tileSize;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      tiles[col + row * cols] = pickColor();
    }
  }

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      fill(tiles[col + row * cols]);
      rect(
        (col - buffer / 2) * tileSize - xRO,
        (row - buffer / 2) * tileSize - yRO + tileSize,
        tileSize,
        tileSize
      );
    }
  }
}

function pickColor() {
  let color;
  const rand = random(100);
  const rand2 = random(100);

  if (rand < 10) {
    color = colors.kaxamb;
  } else if (rand2 < 10) {
    color = colors.gazar;
  } else {
    color = colors.avaz;
  }
  return color;
}

function draw() {
  clear();
  drawTerrain();
}
