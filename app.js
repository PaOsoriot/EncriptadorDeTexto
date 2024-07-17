const campo_texto = document.querySelector(".inputPadron");
const campo_mensaje = document.querySelector("#mensajeEncriptado");
const seccion_encriptado = document.querySelector("#seccion-encriptado");
const boton_copiar = document.querySelector(".btnCopiar");
const mensaje_encriptado = document.querySelector(".mensajeDeEncriptado");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    seccion_encriptado.style.display = "block";
    boton_copiar.classList.remove("hidden");
    mensaje_encriptado.textContent = "¡Su mensaje fue encriptado!";
}

function encriptar(fraseEncriptada) {
    for (const [original, reemplazo] of matriz_code) {
        fraseEncriptada = fraseEncriptada.replaceAll(original, reemplazo);
    }
    return fraseEncriptada;
}

function desencriptar(fraseDesencriptada) {
    for (const [original, reemplazo] of matriz_code) {
        fraseDesencriptada = fraseDesencriptada.replaceAll(reemplazo, original);
    }
    return fraseDesencriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    seccion_encriptado.style.display = "block";
    boton_copiar.classList.remove("hidden");
    mensaje_encriptado.textContent = "¡Su mensaje fue desencriptado!";
}

function btnEliminar() {
    campo_texto.value = "";
    campo_mensaje.value = "";
    seccion_encriptado.style.display = "none";
    boton_copiar.classList.add("hidden");
}

function btnCopiar() {
    campo_mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
