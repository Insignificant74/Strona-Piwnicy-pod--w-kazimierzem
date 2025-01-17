var loadedImages = [];

window.onload = function () {
  const mainButton = document.getElementById("mainButton");
  const foodButton = document.getElementById("foodButton");
  const contactButton = document.getElementById("contactButton");
  const PSKButton = document.getElementById("PSKButton");
  const TKPButton = document.getElementById("TKPButton");
  //const Facebook = document.getElementById("Facebook");
  //const Instagram = document.getElementById("Instagram");
  //const Tripadvisor = document.getElementById("Tripadvisor");
  //const GoogleRating = document.getElementById("GoogleRating");
  const rightButtons = document.getElementById("rightButtons");
  const hamburger = document.getElementById("hamburger");

  mainButton.addEventListener("click", function () {
    window.location.href = "..\\";
  });
  foodButton.addEventListener("click", function () {
    window.location.href = "..\\Menu";
  });
  contactButton.addEventListener("click", function () {
    window.location.href = "..\\Kontakt";
  });
  PSKButton.addEventListener("click", function () {
    window.location.href = "..\\PSK";
  });
  TKPButton.addEventListener("click", function () {
    window.location.href = "..\\TKP";
  });
  /*
  Facebook.addEventListener("click", function () {
    window.location.href = "..\\TKP";
  });
  Instagram.addEventListener("click", function () {
    window.location.href = "..\\TKP";
  });
  Tripadvisor.addEventListener("click", function () {
    window.location.href = "..\\TKP";
  });
  GoogleRating.addEventListener("click", function () {
    window.location.href = "..\\TKP";
  });
  */
  hamburger.addEventListener("click", function () {
    if (rightButtons.style.display != "flex") {
      rightButtons.style.display = "flex";
    } else {
      rightButtons.style.display = "none";
    }
  });
  windowResize();
  window.addEventListener("resize", windowResize);
};

function windowResize() {
  if (window.innerWidth <= 600) {
    document
      .getElementById("MainContainer")
      .addEventListener("click", function () {
        rightButtons.style.display = "none";
      });
  }
}

function setupGallery(gallery, images, comments) {
  var currentImage = 0;
  var img = gallery.querySelector(".galleryImage");
  img.src = images[0];
  gallery.nextSibling.textContent = comments[0];
  const rightButton = gallery.querySelector(".buttonRight");
  const leftButton = gallery.querySelector(".buttonLeft");
  gallery.style.height = img.height + "px";

  rightButton.addEventListener("click", function () {
    if (currentImage < images.length - 1) {
      currentImage++;
      img.src = images[currentImage];
      gallery.nextSibling.textContent = comments[currentImage];
      leftButton.style.display = "block";
      if (currentImage == images.length - 1) {
        rightButton.style.display = "none";
      }
      gallery.style.height = img.height + "px";
    }
  });

  leftButton.addEventListener("click", function () {
    if (currentImage != 0) {
      currentImage--;
      img.src = images[currentImage];
      gallery.nextSibling.textContent = comments[currentImage];
      rightButton.style.display = "block";
      if (currentImage == 0) {
        leftButton.style.display = "none";
      }
      gallery.style.height = img.height + "px";
    }
  });
}

function preloadImages(images) {
  images.forEach((url) => {
    var img = new Image();
    img.src = url;
    loadedImages.push(img);
  });
}
