console.log("Citywood Cafe Pro Loaded");

// Smooth scroll (SAFE VERSION)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    // ❌ prevent broken links like "#"
    if (!target || target === "#") return;

    const section = document.querySelector(target);

    if (!section) return;

    e.preventDefault();

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
