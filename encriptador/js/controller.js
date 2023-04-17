let resultado = document.getElementById("resultados");
const img = document.getElementById("imagen");
const copybtn = document.getElementById("copy");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
resultado.style.display = "none";
copybtn.style.display = "none";

let textoResultante = "";
function encript(){
    let texto = document.getElementById("texto").value.toLowerCase();
    textoResultante = "";

    texto = texto.replace(/[áàäâ]/g, "a");
    texto = texto.replace(/[éèëê]/g, "e");
    texto = texto.replace(/[íìïî]/g, "i");
    texto = texto.replace(/[óòöô]/g, "o");
    texto = texto.replace(/[úùüû]/g, "u");

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            textoResultante += convertir(letra);
        }else{
            textoResultante += letra;
        }    
    }
    
    agregarResultado(textoResultante);
}
function desencript(){
    let texto = document.getElementById("texto").value;
    textoSplit = texto.split(" ");
    textoSplit = textoSplit.map(str => str.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u"));
    textoResultante = textoSplit.join(" ");
    
    agregarResultado(textoResultante);
}
function agregarResultado(texto){
    resultado.innerHTML = textoResultante;
    resultado.style.display = "block";
    img.style.display = "none";
    copybtn.style.display = "block";
    txt1.style.display = "none";
    txt2.style.display = "none";
}

function convertir(vocal){
    switch(vocal){
        case "a":
            return "ai";
            break;
        case "e":
            return "enter";
            break;
        case "i":
            return "imes";
            break;
        case "o":
            return "ober";
            break;
        case "u":
            return "ufat";
            break;
    }
}
function copy(){
    navigator.clipboard.writeText(textoResultante)
    .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
    })

}