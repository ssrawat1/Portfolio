document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.querySelector("#about");
  const aboutSection = document.querySelector("#about-section");
  const header = document.querySelector("header");
  const homeUl = document.querySelector("#home-ul");
  const homeContent = document.querySelector("#home-content");
  const closeIcon = document.querySelector("#close-icon");
  const goToTop = document.querySelector("#goToTop a");

  // Check if elements exist before adding event listeners
  if (aboutBtn) {
    aboutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (aboutSection) {
        if (aboutSection.classList.contains("opacity-0")) {
          aboutSection.classList.remove("opacity-0");
          aboutSection.classList.add("opacity-100");
          aboutSection.classList.add("z-20");
        }
      }
      if (header) header.classList.add("opacity-0");
      if (homeUl) homeUl.classList.add("opacity-0");
      if (homeContent) homeContent.classList.add("opacity-0");
      if (aboutSection) aboutSection.classList.remove("pointer-events-none");
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", (e) => {
      e.preventDefault();
      if (aboutSection) {
        aboutSection.classList.remove("opacity-100");
        aboutSection.classList.remove("z-20");
        aboutSection.classList.add("opacity-0");
      }
      if (header) header.classList.remove("opacity-0");
      if (homeUl) homeUl.classList.remove("opacity-0");
      if (homeContent) homeContent.classList.remove("opacity-0");
      aboutSection.classList.add("pointer-events-none");
    });
  }

  if (goToTop) {
    goToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
  }
});
