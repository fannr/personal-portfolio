const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navbarNav = document.querySelector("#navbarNav");
const elNavlink = document.querySelectorAll(".navbar-nav .navLink");

menuBtn.addEventListener("click", function (e) {
  this.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (
    e.target.id != "menu" &&
    e.target.id != "navbarNav" &&
    e.target.id != "menuBar"
  ) {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
  }
});

window.addEventListener("resize", function () {
  if (this.innerWidth >= 991) {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
  }
});

const loading = document.querySelector(".loading");
window.addEventListener("load", function () {
  setTimeout(() => {
    loading.classList.add("fadeOut");
  }, 2000);

  setTimeout(() => {
    document.body.classList.add("active");
  }, 2500);

  setTimeout(() => {
    loading.remove();
  }, 3000);

  const listNavbar = document.querySelectorAll("[animate-nav]");
  setTimeout(() => {
    for (const list of listNavbar.entries()) {
      setTimeout(() => {
        list[1].classList.add("fadeUp");
      }, 100 * list[0]);
    }
  }, 2600);

  const elHome = document.querySelectorAll("[animateHome]");
  setTimeout(() => {
    for (const el of elHome.entries()) {
      setTimeout(() => {
        el[1].classList.add("fadeDown");
      }, 100 * el[0]);
    }
  }, 3300);
});

let currentScroll = 0;
window.addEventListener("scroll", function () {
  let scroll = this.scrollY;

  if (scroll == 0) {
    nav.classList.remove("scrollUp");
    nav.classList.remove("scrollDown");
  } else if (scroll >= currentScroll) {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
    nav.classList.add("scrollUp");
    nav.classList.remove("scrollDown");
  } else {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");
    nav.classList.add("scrollDown");
    nav.classList.remove("scrollUp");
  }

  currentScroll = scroll;
});

const navA = document.querySelectorAll("a");
for (const a of navA) {
  a.addEventListener("click", function (e) {
    menuBtn.classList.remove("active");
    navbarNav.classList.remove("active");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    e.preventDefault();
  });
}

const projectIcons = document.querySelectorAll(".project__icons");
const titleProject = document.querySelectorAll(".project__title");

for (const icons of projectIcons) {
  icons.addEventListener("mouseover", function (e) {
    if (
      e.target.className == "bi bi-github" ||
      e.target.className == "bi bi-box-arrow-up-right"
    ) {
      for (const title of titleProject) {
        title.classList.add("removeHover");
      }
    }
  });

  icons.addEventListener("mouseout", function (e) {
    if (
      e.target.className == "bi bi-github" ||
      e.target.className == "bi bi-box-arrow-up-right"
    ) {
      for (const title of titleProject) {
        title.classList.remove("removeHover");
      }
    }
  });
}

const navLinkIntersection = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        for (const elLink of elNavlink) {
          elLink.classList.remove("active");

          if (e.target.id === elLink.dataset.navLink) {
            elLink.classList.add("active");
          }
        }
      }
    }
  },
  { threshold: ".6" }
);

const elSection = document.querySelectorAll("[data-scroll-banner]");

const elScrollTop = document.querySelector(".scrollTop");
let scrollTopObserver = new IntersectionObserver(
  (entries) => {
    for (let e of entries) {
      if (e.isIntersecting) {
        if (e.target.id == "home") {
          elScrollTop.classList.remove("show");
        } else {
          elScrollTop.classList.add("show");
        }
      }
    }
  },
  { threshold: ".6" }
);

for (const el of elSection) {
  navLinkIntersection.observe(el);
  scrollTopObserver.observe(el);
}
