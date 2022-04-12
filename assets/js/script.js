const menuBtn = document.getElementById("menu-button");
const menuSection = document.getElementById("menu");

const menuHandler = () => {
  if (menuSection.classList.contains("hidden")) {
    menuSection.classList.remove("hidden");
  } else {
    menuSection.classList.add("hidden");
  }
};

menuBtn.addEventListener("click", menuHandler);
