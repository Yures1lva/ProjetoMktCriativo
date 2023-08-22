(function () {
  "use strict";

  // var $card = document.querySelectorAll("card-service");
  var $textcard = document.querySelector(".text-card");
  var text1 = document.createTextNode(
    "O marketing se concentra em atender às necessidades dos clientes de maneira lucrativa e sustentável, ao mesmo tempo que alcança objetivos de negócios de longo prazo da empresa. Clique e saiba mais"
  );

  $textcard.addEventListener("click", function () {
    $textcard.appendChild(text1);
  });
})();
