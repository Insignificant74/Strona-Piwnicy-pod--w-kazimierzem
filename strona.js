window.onload = function () {
  const mainButton = document.getElementById("mainButton");
  const foodButton = document.getElementById("foodButton");
  const contactButton = document.getElementById("contactButton");

  mainButton.addEventListener("click", function () {
    window.location.href=("StronaGlowna.html");
  });
  foodButton.addEventListener("click", function () {
    window.location.href=("StronaMenu.html");
  });
  contactButton.addEventListener("click", function () {
    window.location.href=("StronaKontakt.html");
  });
};
