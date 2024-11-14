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
  /*
  Instagram.addEventListener("click", function () {
    window.location.href=("https://www.instagram.com/pod.sw.kazimierzem/");
  });
  Facebook.addEventListener("click", function () {
    window.location.href=("https://www.facebook.com/piwnicapodswkazimierzem");
  });
  Tripadvisor.addEventListener("click", function () {
    window.location.href=("https://www.tripadvisor.com/Restaurant_Review-g274819-d24010652-Reviews-Piwnica_pod_SW_Kazimierzem-Zamosc_Lublin_Province_Eastern_Poland.html");
  });
  Google.addEventListener("click", function () {
    window.location.href=("https://www.google.com/maps/place/Restauracja+Piwnica+pod+%C5%9Aw.+Kazimierzem/@50.7167165,23.2532226,17z/data=!3m1!4b1!4m6!3m5!1s0x47236700eb378b11:0xbd66a50a817ab120!8m2!3d50.7167165!4d23.2532226!16s%2Fg%2F11hld850tm?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D");
  });
  TKP.addEventListener("click", function () {
    window.location.href=("https://tydzien-kuchni-polskiej.pl/piwnica-pod-sw-kazimierze");
  });
  PSK.addEventListener("click", function () {
    window.location.href=("https://www.polskieskarby.pl/szlak-kulinarny/lubelszczyzna/restauracja-piwnica-pod-sw-kazimierzem");
  });
  */
};
