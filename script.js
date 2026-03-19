const canvas = document.getElementById("plot");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let phase = 0;

function draw() {
  // clear background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, W, H);

  // axes
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 1;

  // x-axis
  ctx.beginPath();
  ctx.moveTo(0, H / 2);
  ctx.lineTo(W, H / 2);
  ctx.stroke();

  // y-axis
  ctx.beginPath();
  ctx.moveTo(W / 2, 0);
  ctx.lineTo(W / 2, H);
  ctx.stroke();

  // sine wave
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let px = 0; px < W; px++) {
    const x = (px - W / 2) / 50;
    const y = Math.sin(x + phase);
    const py = H / 2 - y * 100;

    if (px === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.stroke();

  phase += 0.05; // speed of motion
  requestAnimationFrame(draw);
}

draw();