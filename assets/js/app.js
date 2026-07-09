const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const search = document.getElementById("search");
const darkModeButton = document.getElementById("darkModeButton");

// Mobile Menu
if (menuButton && navigation) {

menuButton.addEventListener("click", function () {

if (navigation.style.display === "flex") {

navigation.style.display = "none";

} else {

navigation.style.display = "flex";
navigation.style.flexDirection = "column";

}

});

}

// Live Search
if (search) {

search.addEventListener("keyup", function () {

const value = search.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

if (card.innerText.toLowerCase().includes(value)) {

card.style.display = "";

} else {

card.style.display = "none";

}

});

});

}

// Dark Mode
if (darkModeButton) {

darkModeButton.addEventListener("click", function () {

document.body.classList.toggle("darkMode");

darkModeButton.textContent =
document.body.classList.contains("darkMode") ? "☀" : "🌙";

});

}
