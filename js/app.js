const header = document.querySelector(".header");
document.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth Scrolling
const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
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

// Sticky Nav
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null, // means observe hero section inside the viewport
    threshold: 0, // fire an event as soon as 0% of section-hero is in the viewport
    rootMargin: "-80px", // the offset from hero end (the height of the stick nav)
  }
);

observer.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
