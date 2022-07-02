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

    var url = "https://wa.me/+5511987900400?text="
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