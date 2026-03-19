const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const dots = [];
const pointers = new Map();

const spacing = 28;
const margin = 28;

const spring = 0.08;
const damping = 0.88;
const influenceRadius = 90;
const pushStrength = 6;

// build a grid of dots
for (let y = margin; y <= canvas.height - margin; y += spacing) {
  for (let x = margin; x <= canvas.width - margin; x += spacing) {
    dots.push({
      x,
      y,
      homeX: x,
      homeY: y,
      vx: 0,
      vy: 0
    });
  }
}

function getPointerPos(e) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: (e.clientX - rect.left) * canvas.width / rect.width,
    y: (e.clientY - rect.top) * canvas.height / rect.height
  };
}

function setPointer(e) {
  pointers.set(e.pointerId, getPointerPos(e));
}

function removePointer(e) {
  pointers.delete(e.pointerId);
}

canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  setPointer(e);
});

canvas.addEventListener("pointermove", (e) => {
  // mouse: respond on hover
  // touch: respond while active
  if (e.pointerType === "mouse" || pointers.has(e.pointerId)) {
    setPointer(e);
  }
});

canvas.addEventListener("pointerup", removePointer);
canvas.addEventListener("pointercancel", removePointer);

canvas.addEventListener("pointerleave", (e) => {
  if (e.pointerType === "mouse") {
    removePointer(e);
  }
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // optional: draw soft circles showing active interaction zones
  for (const p of pointers.values()) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, influenceRadius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80, 120, 255, 0.06)";
    ctx.fill();
  }

  for (const d of dots) {
    let ax = (d.homeX - d.x) * spring;
    let ay = (d.homeY - d.y) * spring;

    for (const p of pointers.values()) {
      const dx = d.x - p.x;
      const dy = d.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 0 && dist < influenceRadius) {
        const force = (1 - dist / influenceRadius) * pushStrength;
        ax += (dx / dist) * force;
        ay += (dy / dist) * force;
      }
    }

    d.vx = (d.vx + ax) * damping;
    d.vy = (d.vy + ay) * damping;
    d.x += d.vx;
    d.y += d.vy;

    const displacement = Math.hypot(d.x - d.homeX, d.y - d.homeY);
    const r = 3 + Math.min(displacement * 0.05, 3);

    ctx.beginPath();
    ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(40, 80, 220)";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();