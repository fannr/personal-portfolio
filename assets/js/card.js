document.addEventListener("DOMContentLoaded", function () {
  const card = [
    {
      title: "Dasteen Blog",
      desc: "Created a website that contains a personal landing page entitled dasteen.blog, this design I got from my friend named dastin",
      subtitle: ["HTML", "Bootstrap 5", "Javascript"],
      linkGithub: "https://github.com/fannr/Dasteen-Blog",
      linkProject: "https://dasteenblog.netlify.app/",
    },
    {
      title: "Navbar & Hamburger",
      desc: "Create a design navbar & hamburger menu",
      subtitle: ["HTML", "CSS", "Javascript"],
      linkGithub: "https://github.com/fannr/hamburger-menu",
      linkProject: "https://test-hamburger-menu.netlify.app/",
    },
    {
      title: "Todo Blog App",
      desc: "Create todo blog app there is a simple crud with localStorage",
      subtitle: ["HTML", "CSS", "Javascript"],
      linkGithub: "https://github.com/fannr/Todo-blog-app",
      linkProject: "https://noerra-todo-blog-app.netlify.app/",
    },
    {
      title: "Book Apps",
      desc: "Create a BookApps project there is a simple crud with localStorage",
      subtitle: ["HTML", "CSS", "Javascript"],
      linkGithub: "https://github.com/fannr/book-apps",
      linkProject: "https://noerra-bookapps.netlify.app/",
    },
  ];

  const projectContainer = document.querySelector(".container__card");
  (function showCard() {
    projectContainer.innerHTML = card
      .map((c) => {
        return `<div animate class="project__card animate">
      <div animate class="project__icon">
        <i class="bi bi-folder"></i>

        <div class="project__icons">
          <a
            href="${c.linkGithub}"
            target="_blank"
          >
            <i class="bi bi-github"></i>
          </a>
          <a href="${c.linkProject}" target="_blank">
            <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
      </div>
      <h3 class="project__title">${c.title}</h3>
      <p class="project__desc">
        ${c.desc}.
      </p>
      <div class="project__subtitle">
      ${c.subtitle
        .map((s) => {
          return `<small>${s}</small>`;
        })
        .join("")}
      </div>
    </div>`;
      })
      .join("");
  })();

  const elAnimate = document.querySelectorAll("[animate]");
  const animateObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("fadeUp", entry.isIntersecting);
        if (entry.isIntersecting) animateObserver.unobserve(entry.target);
      }
    },
    {
      threshold: 0.7,
    }
  );

  for (const el of elAnimate) {
    animateObserver.observe(el);
  }
});
