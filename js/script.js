function carrossel() {
  let totalSlides = document.querySelectorAll(".slider--item").length;
  let currentSlide = 0;

  document.querySelector(
    ".slider--width"
  ).style.width = `calc(100vw * ${totalSlides})`;

  document.querySelector(".slider--controls").style.height = `${document.querySelector(".slider").clientHeight
    }px`;

  function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
    updateMargin();
  }

  function goNext() {
    currentSlide++;
    if (currentSlide > totalSlides - 1) {
      currentSlide = 0;
    }
    updateMargin();
  }

  function updateMargin() {
    let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
    let newMargin = currentSlide * sliderItemWidth;
    document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
  }

  setInterval(() => {
    goNext();
  }, 4000);
}


function gotowhatsapp() {

  var nome = document.getElementById("nome").value;
  var endereco = document.getElementById("endereco").value;
  var sabor = document.getElementById("sabor").value;
  var borda = document.getElementById("borda").value;
  var entrega = document.getElementById("entrega").value;
  var pizzaDoce = document.getElementById("pizzaDoce").value;
  var esfihaSalgada = document.getElementById("esfihasSalgadas").value
  var esfihasDoce = document.getElementById("esfihasDoces").value;
  var fogazzas = document.getElementById("fogazzas").value;

  var url = "https://wa.me/+5511985307427?text="
    + "Nome: " + nome + "%0a"
    + "Endereço: " + endereco + "%0a"
    + "Sabor: " + sabor + "%0a"
    + "Pizza Doce: " + pizzaDoce + "%0a"
    + "Esfihas Salgadas: " + esfihaSalgada + "%0a"
    + "Esfihas Doce: " + esfihasDoce + "%0a"
    + "Fogazzas: " + fogazzas + "%0a"
    + "Borda: " + borda + "%0a"
    + "Entrega: " + entrega;

  window.open(url, '_blank').focus();
}

function buffetgotowhatsapp() {

  var nomebuffet = document.getElementById("nomebuffet").value;
  var enderecobuffet = document.getElementById("enderecobuffet").value;
  var saborbuffet = document.getElementById("saborbuffet").value;

  var url = "https://wa.me/+5511985307427?text="
    + "Nome: " + nomebuffet + "%0a"
    + "Endereço: " + enderecobuffet + "%0a"
    + "Sabor: " + saborbuffet + "%0a"

  window.open(url, '_blank').focus();
}

carrossel();
gotowhatsapp();
buffetgotowhatsapp();