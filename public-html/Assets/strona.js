window.onload = function () {
  const mainButton = document.getElementById("mainButton");
  const foodButton = document.getElementById("foodButton");
  const contactButton = document.getElementById("contactButton");

  mainButton.addEventListener("click", function () {
    window.location.href=("..\\");
  });
  foodButton.addEventListener("click", function () {
    window.location.href=("..\\Menu");
  });
  contactButton.addEventListener("click", function () {
    window.location.href=("..\\Kontakt");
  });
};
