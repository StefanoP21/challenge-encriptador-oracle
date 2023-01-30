
function hideDisplay() {
    document.getElementById('munieco').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';

    // var x = document.getElementById('munieco');
    // if (x.style.display === 'none') {
    //   x.style.display = 'block';
    // } else {
    //   x.style.display = 'none';
    // }

    // var y = document.getElementById('mensaje');
    // if (y.style.display === 'none') {
    //   y.style.display = 'block';
    // } else {
    //   y.style.display = 'none';
    // }
}

function mostrar() {

    var x = document.getElementById('copiar');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } 

}

function encriptar() {

    var texto = document.getElementById('area-texto').value.toLowerCase();
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {

        var letra = texto[i];
        var letraEncriptada = "";

        switch (letra) {
            case "a":
                letraEncriptada = "ai";
                break;
            case "e":
                letraEncriptada = "enter";
                break;
            case "i":
                letraEncriptada = "imes";
                break;
            case "o":
                letraEncriptada = "ober";
                break;
            case "u":
                letraEncriptada = "ufat";
                break;
            default:
                letraEncriptada = letra;
                break;
        }

        textoEncriptado += letraEncriptada;

    }

    document.getElementById('resultado-texto').value = textoEncriptado;

    hideDisplay();

    mostrar();

}

function desencriptar() {

    var texto = document.getElementById('area-texto').value.toLowerCase();

    var textoDesencriptado = texto.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById('resultado-texto').value = textoDesencriptado;

    hideDisplay();

    mostrar();

}

function copiar() {

    var copiarTexto = document.getElementById("resultado-texto");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");

    hideDisplay();

}


