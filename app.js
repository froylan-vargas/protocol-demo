const tabs = document.querySelectorAll(".tab");
const screens = document.querySelectorAll(".screen");
const title = document.querySelector("#screen-title");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.screen;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    screens.forEach((screen) => {
      const active = screen.id === `${target}-screen`;
      screen.classList.toggle("is-active", active);
      if (active) {
        title.textContent = screen.dataset.title;
      }
    });
  });
});

document.querySelectorAll(".segmented button, .choice-list button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.parentElement;
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
  });
});
