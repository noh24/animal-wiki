window.onload = function() {
  submitAnimalContent();
}

function getAnimal() {
  const snake = document.getElementById("snake");
  snake.setAttribute("class", "hidden");

  const turtle = document.getElementById("turtle");
  turtle.setAttribute("class", "hidden");

  const lion = document.getElementById("lion");
  lion.setAttribute("class", "hidden");

  const selectAnimal = document.querySelector("input#animal").value;

  if (selectAnimal === "snake") {
    snake.removeAttribute("class");
  } else if (selectAnimal === "turtle") {
    turtle.removeAttribute("class");
  } else if (selectAnimal === "lion") {
    lion.removeAttribute("class");
  } else {
    alert("Type the animal we provided!");
  }
}

function submitAnimalContent() {
  const form = document.querySelector("form");

  form.onsubmit = function(e) {
    e.preventDefault();
    getAnimal();
  }
}
