/* ── Animated dot background ──────────────────────────────── */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let W, H;
const dots = [];
const spacing = 40;
let pointer = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  dots.length = 0;
  for (let y = 20; y < H; y += spacing) {
    for (let x = 20; x < W; x += spacing) {
      dots.push({ x, y, homeX: x, homeY: y, vx: 0, vy: 0 });
    }
  }
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; });
window.addEventListener("pointerleave", () => { pointer.x = -9999; pointer.y = -9999; });

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (const d of dots) {
    let ax = (d.homeX - d.x) * 0.05;
    let ay = (d.homeY - d.y) * 0.05;
    const dx = d.x - pointer.x;
    const dy = d.y - pointer.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 0 && dist < 120) {
      const force = (1 - dist / 120) * 2.5;
      ax += (dx / dist) * force;
      ay += (dy / dist) * force;
    }
    d.vx = (d.vx + ax) * 0.9;
    d.vy = (d.vy + ay) * 0.9;
    d.x += d.vx;
    d.y += d.vy;
    ctx.beginPath();
    ctx.arc(d.x, d.y, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.13)";
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

resize();
draw();

/* ── Markdown cell loader ─────────────────────────────────── */
marked.setOptions({ breaks: true });

document.querySelectorAll(".cell[data-md]").forEach(async (cell) => {
  const body = cell.querySelector(".cell-body");
  const src = cell.dataset.md;

  body.classList.add("loading");
  body.textContent = "Loading…";

  try {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`${res.status}`);
    const text = await res.text();
    body.classList.remove("loading");
    body.innerHTML = marked.parse(text);
  } catch (err) {
    body.classList.remove("loading");
    body.textContent = `Could not load ${src}.`;
    console.error(err);
  }
});
