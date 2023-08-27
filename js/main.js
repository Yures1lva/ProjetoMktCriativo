(function () {
  "use strict";

  // var $card = document.querySelectorAll("card-service");
  var $btn1 = document.getElementById("btn-services");
  var $btn2 = document.getElementById("btn-services2")
  var $btn3 = document.getElementById("btn-services3")
  var $btn4 = document.getElementById("btn-services4")


  
  for(let i= 0;i<5;i++){
    
  }
  
  $btn1.addEventListener("click", function () {
    toggleBtn($btn1)
  });

  $btn2.addEventListener("click", function () {
    toggleBtn($btn2)
  });

  $btn3.addEventListener("click", function () {
    toggleBtn($btn3)
  });

  $btn4.addEventListener("click", function () {
    toggleBtn($btn4)
  });


  function toggleBtn(elemento){
    elemento.classList.toggle("button-services-active")
  }
})();
