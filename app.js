const btn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const contactBtn = document.querySelector("#contactMe");

const smootScroll = function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    // console.log(href);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close the mobile nav once it's clicked
    if (link.classList.contains("nav__list__link")) {
      if (header.classList.contains("nav-open"))
        header.classList.remove("nav-open");
    }
  });
};

btn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//update year
const yearEl = document.querySelector(".year");
let currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//add a smooth scroll function
const links = document.querySelectorAll(".nav__list__link");
links.forEach((link) => {
  smootScroll(link);
});
smootScroll(contactBtn);

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();

//     const href = link.getAttribute("href");
//     // console.log(href);

//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }

//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     //close the mobile nav once it's clicked
//     if (link.classList.contains("nav__list__link")) {
//       if (header.classList.contains("nav-open"))
//         header.classList.remove("nav-open");
//     }
//   });
// });

//make the mobile nav button sticky
const heroSectionEl = document.querySelector(".section__hero");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    ent.isIntersecting
      ? document.body.classList.remove("sticky")
      : document.body.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(heroSectionEl);
