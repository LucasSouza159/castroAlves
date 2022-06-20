function buffetgotowhatsapp() {
            
    var nomebuffet = document.getElementById("nomebuffet").value;
    var enderecobuffet = document.getElementById("enderecobuffet").value;
    var saborbuffet = document.getElementById("saborbuffet").value;
    
    var url = "https://wa.me/+5511985307427?text=" 
    + "Nome: " + nomebuffet + "%0a"
    + "Endereço: " + enderecobuffet + "%0a"
    + "Sabor: " + saborbuffet  + "%0a"

    window.open(url, '_blank').focus();
}