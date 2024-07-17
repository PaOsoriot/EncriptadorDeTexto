const campo_texto = document.querySelector(".inputPadron");
const campo_mensaje = document.querySelector("#mensajeEncriptado");
const seccion_encriptado = document.querySelector("#seccion-encriptado");

const matriz_code = [
    ["e", "enter"], // índice 0
    ["i", "imes"], // índice 1
    ["a", "ai"], // índice 2
    ["o", "ober"], // índice 3
    ["u", "ufat"]  // índice 4
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    seccion_encriptado.style.display = "block";
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }    
    }
    return fraseEncriptada;
}

function btnEliminar() {
    campo_texto.value = ""; // Elimina el texto en el área de entrada
    campo_mensaje.value = ""; // Elimina el texto encriptado
    seccion_encriptado.style.display = "none"; // Oculta el área de texto encriptado
}

function btnCopiar() {
    campo_mensaje.select();
    document.execCommand("copy");

    // Mensaje de confirmación (opcional)
    alert("Texto copiado al portapapeles");
}
