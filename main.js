function toggleSectionTarget(sections, targetSection) {
  sections.forEach((section) => {
    section.classList.add("sectionHide");
  });
  targetSection.classList.remove("sectionHide");
}

document.addEventListener("DOMContentLoaded", (event) => {
  const initialHash = window.location.hash || "#home";
  const sections = Array.from(document.querySelectorAll("section"));
  const initialSection = sections.find(
    (section) => section.id === initialHash.substring(1)
  );
  if (initialSection) {
    toggleSectionTarget(sections, initialSection);
  }

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) {
      return;
    }
    //event.preventDefault();

    // const targetId = anchor.getAttribute("href").substring(1);
    // const sections = Array.from(document.querySelectorAll("section"));
    // const targetSection = sections.find((section) => section.id === targetId);

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        window.location.hash = anchor.textContent;
      });
    }
  });
});
