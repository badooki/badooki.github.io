const canvas = document.getElementById("plot");
const ctx = canvas.getContext("2d");

let phase = 0;
let cssWidth = 0;
let cssHeight = 0;

function resizeCanvas() {
  cssWidth = canvas.clientWidth;
  cssHeight = canvas.clientHeight;

  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.round(cssWidth * dpr);
  canvas.height = Math.round(cssHeight * dpr);

  // Draw using CSS-pixel coordinates
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function draw() {
  const W = cssWidth;
  const H = cssHeight;

  ctx.clearRect(0, 0, W, H);

  // keep the full wave nicely visible on any screen
  const padding = 40;
  const amplitude = Math.max(20, (H - 2 * padding) / 2);

  // show a fixed number of cycles across the screen
  const cyclesVisible = 2;
  const xmin = -cyclesVisible * Math.PI;
  const xmax =  cyclesVisible * Math.PI;

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();

  for (let px = 0; px < W; px++) {
    const t = px / (W - 1);                  // 0 to 1 across the screen
    const x = xmin + t * (xmax - xmin);      // math x-range
    const y = Math.sin(x + phase);
    const py = H / 2 - amplitude * y;

    if (px === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }

  ctx.stroke();

  phase += 0.03;
  requestAnimationFrame(draw);
}

resizeCanvas();
requestAnimationFrame(draw);

// Good enough if canvas fills the viewport:
window.addEventListener("resize", resizeCanvas);