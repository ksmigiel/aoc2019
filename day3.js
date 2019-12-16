const fs = require("fs");
const path = require("path");

const rawInput = fs.readFileSync(path.join(__dirname, "input.txt"), { encoding: "utf-8" });

const firstLine = rawInput.split("\n")[0].split(",");
const secondLine = rawInput.split("\n")[1].split(",");

const point = { x: 0, y: 0 };
const points = [];

for (const directionData of firstLine) {
  const direction = directionData.slice(0, 1);
  const data = Number.parseInt(directionData.slice(1));

  switch (direction) {
    case "L":
      point.y -= data;
      break;
    case "R":
      point.y += data;
      break;
    case "U":
      point.x += data;
      break;
    case "D":
      point.x -= data;
      break;
  }

  points.push({ x: point.x, y: point.y });
}

point.x = 0;
point.y = 0;

const intersections = [];

for (const directionData of secondLine) {
  const direction = directionData.slice(0, 1);
  const data = Number.parseInt(directionData.slice(1));

  switch (direction) {
    case "L":
      point.y -= data;
      break;
    case "R":
      point.y += data;
      break;
    case "U":
      point.x += data;
      break;
    case "D":
      point.x -= data;
      break;
  }

  console.log(point.x,)
  for (const p of points) {
    if (p.x === point.x && p.y === point.y) {
      intersections.push({ x: p.x, y: p.y });
    }
  }
}

console.log(intersections)
