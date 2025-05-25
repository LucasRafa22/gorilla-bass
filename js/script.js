let vidaGorila = 100;
let humanosRestantes = 100;
let ataques = 0



function log(texto) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${texto}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}