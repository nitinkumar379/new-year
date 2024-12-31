// Canvas and Fireworks Setup
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function drawFirework(x, y) {
  const particles = 50;
  const angleStep = (Math.PI * 2) / particles;

  for (let i = 0; i < particles; i++) {
    const angle = i * angleStep;
    const velocity = Math.random() * 4 + 2;
    const particle = {
      x: x,
      y: y,
      xVel: Math.cos(angle) * velocity,
      yVel: Math.sin(angle) * velocity,
      color: randomColor(),
      size: Math.random() * 2 + 1,
      life: 100,
    };

    const interval = setInterval(() => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      particle.x += particle.xVel;
      particle.y += particle.yVel;
      particle.life--;

      if (particle.life <= 0) {
        clearInterval(interval);
      }
    }, 20);
  }
}

document.getElementById("fireworksButton").addEventListener("click", () => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.6;
  drawFirework(x, y);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
