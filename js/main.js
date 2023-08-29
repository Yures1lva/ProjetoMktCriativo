(function () {
  "use strict";

  // menu hamburguer
  var $btnMenu = document.getElementById("btn-menu");

  $btnMenu.addEventListener("click", toggleMenu);
  $btnMenu.addEventListener("touchstart", toggleMenu);

  function toggleMenu(event) {
    // tratando chamada dupla de envento com o preventDefault
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active-menu");

    const active = nav.classList.contains("active-menu");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else if (!active) {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  var $clickMenu = document.getElementById("linkmenu");
  var $clickMenu2 = document.getElementById("linkmenu2");
  var $clickMenu3 = document.getElementById("linkmenu3");
  var $clickMenu4 = document.getElementById("linkmenu4");
  var $clickMenu5 = document.getElementById("linkmenu5");

  $clickMenu.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu2.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu3.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  $clickMenu4.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });
  $clickMenu5.addEventListener("click", function () {
    nav.classList.toggle("active-menu");
  });

  // services
  var $btn1 = document.getElementById("btn-services");
  var $btn2 = document.getElementById("btn-services2");
  var $btn3 = document.getElementById("btn-services3");
  var $btn4 = document.getElementById("btn-services4");

  for (let i = 0; i < 5; i++) {}

  $btn1.addEventListener("click", function () {
    toggleBtn($btn1, "assets/imgs/person1.png");
  });

  $btn2.addEventListener("click", function () {
    toggleBtn($btn2, "assets/imgs/person2.png");
  });

  $btn3.addEventListener("click", function () {
    toggleBtn($btn3, "assets/imgs/person3.png");
  });

  $btn4.addEventListener("click", function () {
    toggleBtn($btn4, "assets/imgs/person4.png");
  });

  function toggleBtn(elemento, img) {
    if (elemento.classList.contains("button-services-active")) {
      document.getElementById("img-service").src = "assets/imgs/person.png";
    }

    if (elemento === $btn1) {
      elemento.classList.toggle("button-services-active");
      document.getElementById("img-service").src = img;
      $btn2.classList.remove("button-services-active");
      $btn3.classList.remove("button-services-active");
      $btn4.classList.remove("button-services-active");
    } else if (elemento === $btn2) {
      elemento.classList.toggle("button-services-active");
      document.getElementById("img-service").src = img;
      $btn1.classList.remove("button-services-active");
      $btn3.classList.remove("button-services-active");
      $btn4.classList.remove("button-services-active");
    } else if (elemento === $btn3) {
      elemento.classList.toggle("button-services-active");
      document.getElementById("img-service").src = img;
      $btn1.classList.remove("button-services-active");
      $btn2.classList.remove("button-services-active");
      $btn4.classList.remove("button-services-active");
    } else if (elemento === $btn4) {
      elemento.classList.toggle("button-services-active");
      document.getElementById("img-service").src = img;
      $btn1.classList.remove("button-services-active");
      $btn2.classList.remove("button-services-active");
      $btn3.classList.remove("button-services-active");
    } else {
      $btn1.classList.remove("button-services-active");
      $btn2.classList.remove("button-services-active");
      $btn3.classList.remove("button-services-active");
      $btn4.classList.remove("button-services-active");
    }
  }
})();
