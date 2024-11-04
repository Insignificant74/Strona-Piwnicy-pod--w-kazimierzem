window.onload = function () {
  const mainButton = document.getElementById("mainButton");
  const foodButton = document.getElementById("foodButton");
  const foodDropdown = foodButton.querySelector(".dropdown");
  const foodMenu = document.getElementById("foodMenu");
  const wineMenu = document.getElementById("wineMenu");
  const contactButton = document.getElementById("contactButton");

console.log(foodDropdown);

  mainButton.addEventListener("click", function () {
    window.location.href=("StronaGlowna.html");
  });
  foodButton.addEventListener("mouseover", function () {
    foodDropdown.style.display="block";
  });
  foodButton.addEventListener("mouseout", function () {
    foodDropdown.style.display="none";
  });
  foodMenu.addEventListener("click", function () {
    window.location.href=("StronaMenu.html");
  });
  contactButton.addEventListener("click", function () {
    window.location.href=("StronaKontakt.html");
  });
};
