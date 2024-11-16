window.addEventListener("load", function () {
  const galleryKuchnia = document.getElementById("galleryKuchnia");
  const imagesKuchnia = [];
  const commentKuchnia = [];
  const galleryBar = document.getElementById("galleryBar");
  const imagesBar = [
    "bar_1.png",
    "kawa_1.png",
    "kawa_2.png",
    "kawa_3.png",
    "kawa_4.png",
    "wina_1.png",
    "wina_2.png",
  ];
  const commentBar = [
    "Nasz Bar",
    "kawa kawa",
    "mleko mleko",
    "bajo jajo",
    "fedasfes",
    "desc",
    "wina_2.png",
  ];
  const galleryPomieszczenia = document.getElementById("galleryPomieszczenia");
  const imagesPomieszczenia = [
    "barowa_1.png",
    "kolorowa_1.png",
    "niebieska_1.png",
    "ogródek_1.png",
    "ukryta_1.png",
    "barowa_2.png",
    "kolorowa_2.png",
    "ogródek_2.png",
  ];
  const commentPomieszczenia = [
    "Nasz Bar",
    "kawa kawa",
    "mleko mleko",
    "bajo jajo",
    "fedasfes",
    "desc",
    "wina_2.png",
    "a",
  ];
  const galleryOferty = document.getElementById("galleryOferty");
  const imagesOferty = [];
  const commentOferty = [];

  setupGallery(galleryBar, imagesBar, commentBar);
  setupGallery(galleryKuchnia, imagesKuchnia, commentKuchnia);
  setupGallery(galleryPomieszczenia, imagesPomieszczenia, commentPomieszczenia);
  setupGallery(galleryOferty, imagesOferty, commentOferty);

  preloadImages(imagesBar);
  preloadImages(imagesKuchnia);
  preloadImages(imagesPomieszczenia);
  preloadImages(imagesOferty);
});
