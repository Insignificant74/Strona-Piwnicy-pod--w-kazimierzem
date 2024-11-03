window.onload = function () {
  const mainButton = document.getElementById("mainButton");
  const foodButton = document.getElementById("foodButton");
  const foodDropdown = foodButton.getElementsByClassName("dropdown");
  const foodMenu = document.getElementById("foodMenu");
  const wineMenu = document.getElementById("wineMenu");
  const contactButton = document.getElementById("contactButton");

  mainButton.addEventListener("click", function () {
    window.location.href=("StronaGlowna.html");
  });
  foodButton.addEventListener("mouseover", function () {
    foodDropdown.style.display="block";
  });
  foodButton.addEventListener("mouseoff", function () {
    foodDropdown.style.display="none";
  });
  foodMenu.addEventListener("click", function () {
    window.location.href=("StronaMenu.html");
  });
  contactButton.addEventListener("click", function () {
    window.location.href=("StronaKontakt.html");
  });
};
