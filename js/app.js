const header = document.querySelector(".header");
document.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Navigation
    if (link.classList.contains("main-nav__link")) {
      header.classList.toggle("nav-open");
    }
  });
});
