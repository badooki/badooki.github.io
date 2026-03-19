const canvas = document.getElementById("plot");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;


// sine wave
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.beginPath();

for (let px = 0; px < W; px++) {
  const x = (px - W / 2) / 50;
  const y = Math.sin(x);
  const py = H / 2 - y * 100;

  if (px === 0) {
    ctx.moveTo(px, py);
  } else {
    ctx.lineTo(px, py);
  }
}

ctx.stroke();