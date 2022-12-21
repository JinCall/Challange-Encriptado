const botonEncrip = document.querySelector("#encriptacion");
const botonDsncrip = document.querySelector("#desencriptacion");
const botonCpr = document.querySelector("#copiar");

const textoRsltd = document.querySelector("#solucion");
const textoIngrs = document.querySelector("#texto");


function encriptar () {
  let texto = textoIngrs.value.toLowerCase();
  let textoEncrip = texto

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

      document.getElementById("sinresolver").style.visibility = "hidden";
      document.getElementById("copiar").style.visibility = "visible";

      textoRsltd.value = textoEncrip;

          document.getElementById("texto").value = '';
}

function desencriptar () {

  let textoEncrip = textoIngrs.value.toLowerCase();
  let texto = textoEncrip
     
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")


      document.getElementById("sinresolver").style.visibility = "hidden";
      document.getElementById("copiar").style.visibility = "visible";

      textoRsltd.value = texto;

          document.getElementById("texto").value = '';
}

function copiar () {

  let textoEncrip = textoRsltd.value;
    navigator.clipboard.writeText(textoEncrip);
}

botonEncrip.onclick = encriptar;
botonDsncrip.onclick = desencriptar;
botonCpr.onclick = copiar;