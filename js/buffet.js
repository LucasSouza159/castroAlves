function buffetgotowhatsapp() {
            
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var sabor = document.getElementById("sabor").value;
    
    var url = "https://wa.me/+5511985307427?text=" 
    + "Nome: " + nome + "%0a"
    + "Endereço: " + endereco + "%0a"
    + "Sabor: " + sabor  + "%0a"

    window.open(url, '_blank').focus();
}