const fs = require("fs");
const path = require("path");

const inputRaw = fs
  .readFileSync(path.join(__dirname, "input.txt"), { encoding: "utf-8" })
  .split(",")
  .map(i => Number.parseInt(i));

const jump = 4;

function solve(a, b) {
  let currInst = 0;

  let input = [...inputRaw];
  input[1] = a;
  input[2] = b;
  
  while (isValidOpCode(input[currInst])) {
    const opCode = input[currInst];
    const left = input[currInst + 1];
    const right = input[currInst + 2];
    const destination = input[currInst + 3];

    if (opCode === 1) input[destination] = input[left] + input[right];
    if (opCode === 2) input[destination] = input[left] * input[right];

    currInst += jump;
  }

  return input[0];
}

function isValidOpCode(opCode) {
  return opCode === 1 || opCode === 2;
}

for (let i = 0; i <= 99; i++) {
  for (let j = 0; j <= 99; j++) {
    const v = solve(i, j);
    if (v === 19690720) { console.log(i * 100 + j) }
    }
}

