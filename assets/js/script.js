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

const sportBtn = document.getElementById("sport-button");
const sportSection = document.getElementById("sports");
const tourBtn = document.getElementById("tour-button");
const tourSection = document.getElementById("tours");
const blogBtn = document.getElementById("blog-button");
const blogSection = document.getElementById("blog");
const weatherBtn = document.getElementById("weather-button");
const weatherSection = document.getElementById("weather");
const projectBtn = document.getElementById("project-button");
const projectSection = document.getElementById("project");
const quizBtn = document.getElementById("quiz-button");
const quizSection = document.getElementById("quiz");

const sportHandler = () => {
  if (sportSection.classList.contains("hidden")) {
    sportSection.classList.remove("hidden");
  } else {
    sportSection.classList.add("hidden");
  }
};

const tourHandler = () => {
  if (tourSection.classList.contains("hidden")) {
    tourSection.classList.remove("hidden");
  } else {
    tourSection.classList.add("hidden");
  }
};

const blogHandler = () => {
  if (blogSection.classList.contains("hidden")) {
    blogSection.classList.remove("hidden");
  } else {
    blogSection.classList.add("hidden");
  }
};

const weatherHandler = () => {
  if (weatherSection.classList.contains("hidden")) {
    weatherSection.classList.remove("hidden");
  } else {
    weatherSection.classList.add("hidden");
  }
};

const projectHandler = () => {
  if (projectSection.classList.contains("hidden")) {
    projectSection.classList.remove("hidden");
  } else {
    projectSection.classList.add("hidden");
  }
};

const quizHandler = () => {
  if (quizSection.classList.contains("hidden")) {
    quizSection.classList.remove("hidden");
  } else {
    quizSection.classList.add("hidden");
  }
};

sportBtn.addEventListener("click", sportHandler);
tourBtn.addEventListener("click", tourHandler);
blogBtn.addEventListener("click", blogHandler);
weatherBtn.addEventListener("click", weatherHandler);
projectBtn.addEventListener("click", projectHandler);
quizBtn.addEventListener("click", quizHandler);
