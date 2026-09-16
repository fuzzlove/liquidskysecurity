// EDIT: Replace this email with the address that should receive client intake requests.
const BUSINESS_EMAIL = "security@liquidskysecurity.com";

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const form = document.querySelector("[data-intake-form]");
const canvas = document.querySelector("[data-hero-canvas]");

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  header?.classList.remove("nav-active");
  navLinks?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  header?.classList.toggle("nav-active", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const lines = [
    "New security review request",
    "",
    ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value || "Not provided"}`),
    "",
    "Preferred next step: reply with availability for a discovery call.",
  ];

  const subject = encodeURIComponent("Security Review Request");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

function startHeroCanvas() {
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particles = [];
  const particleCount = 56;
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function seedParticles() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1 + Math.random() * 1.8,
      });
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    const gradient = context.createRadialGradient(width * 0.55, height * 0.2, 0, width * 0.55, height * 0.2, width * 0.72);
    gradient.addColorStop(0, "rgba(79, 244, 207, 0.16)");
    gradient.addColorStop(0.55, "rgba(24, 183, 166, 0.04)");
    gradient.addColorStop(1, "rgba(5, 7, 11, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      if (!prefersReducedMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(79, 244, 207, 0.7)";
      context.fill();

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 132) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(79, 244, 207, ${0.15 * (1 - distance / 132)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    });

    context.strokeStyle = "rgba(131, 183, 255, 0.16)";
    context.lineWidth = 1;
    for (let x = 0; x < width; x += 96) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + height * 0.28, height);
      context.stroke();
    }

    animationFrame = window.requestAnimationFrame(draw);
  }

  resize();
  seedParticles();
  draw();

  window.addEventListener(
    "resize",
    () => {
      window.cancelAnimationFrame(animationFrame);
      resize();
      seedParticles();
      draw();
    },
    { passive: true }
  );
}

startHeroCanvas();
