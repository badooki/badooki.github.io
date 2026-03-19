const canvas = document.getElementById("plot");
const container = document.getElementById("plot-container");
const ctx = canvas.getContext("2d");

let phase = 0;
let cssWidth = 0;
let cssHeight = 0;

function resizeCanvas() {
  cssWidth = container.clientWidth;
  cssHeight = container.clientHeight;

  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function draw() {
  const W = cssWidth;
  const H = cssHeight;

  ctx.clearRect(0, 0, W, H);


  // sine wave
  const padding = 20;
  const amplitude = (H - 2 * padding) / 2;

  const cyclesVisible = 2;
  const xmin = -cyclesVisible * Math.PI;
  const xmax =  cyclesVisible * Math.PI;

  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
  ctx.beginPath();

  for (let px = 0; px < W; px++) {
    const t = px / (W - 1);
    const x = xmin + t * (xmax - xmin);
    const y = Math.sin(x + phase);
    const py = H / 2 - amplitude * y;

    if (px === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.stroke();

  phase += 0.03;
  requestAnimationFrame(draw);
}

resizeCanvas();
requestAnimationFrame(draw);

new ResizeObserver(resizeCanvas).observe(container);