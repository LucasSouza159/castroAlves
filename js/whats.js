function gotowhatsapp() {
            
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var sabor = document.getElementById("sabor").value;
    var borda = document.getElementById("borda").value;
    var entrega = document.getElementById("entrega").value;

    var url = "https://wa.me/+5511985307427?text=" 
    + "Nome: " + nome + "%0a"
    + "Endereço: " + endereco + "%0a"
    + "Sabor: " + sabor  + "%0a"
    + "Borda: " + borda + "%0a"
    + "Entrega: " + entrega; 

    window.open(url, '_blank').focus();
}