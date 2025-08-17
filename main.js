function toggleSectionTarget(sections, targetSection) {
  sections.forEach((section, _) => {
    section.classList.add("sectionHide");
  });
  targetSection.classList.remove("sectionHide");
}

document.addEventListener("DOMContentLoaded", (event) => {
  window.location.hash = "#home";
  if (document.startViewTransition) {
    const sections = Array.from(document.querySelectorAll("section"));
    const homeSection = sections.find((section, _) => {
      if (section.id === "home") {
        return true;
      }
    });
    document.startViewTransition(() => {
      toggleSectionTarget(sections, homeSection);
    });
  }
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) {
      return;
    }
    const sections = Array.from(document.querySelectorAll("section"));
    const tgtSection = sections.find((section, _) => {
      if (section.id === anchor.textContent) {
        return true;
      }
    });
    document.startViewTransition(() => {
      toggleSectionTarget(sections, tgtSection);
    });
  });
});
