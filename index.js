var sim = window.document.getElementById("SIM")
var NAO1 = window.document.getElementById("NAO1")
var NAO2 = window.document.getElementById("NAO2")
var NAO3 = window.document.getElementById("NAO3")
var NAO4 = window.document.getElementById("NAO4")
var NAO5 = window.document.getElementById("NAO5")
var ENVIAR = window.document.getElementById("ENVIAR")
var label = window.document.getElementById("label")
var imagem = window.document.getElementById("imagem")
var titulo2 = window.document.getElementById("titulo2")
var titulo1 = window.document.getElementById("titulo1")
var formulario1 = window.document.getElementById("formulario1")
var matematica = window.document.getElementById("matematica")
var dois = window.document.getElementById("dois")
var dois = window.document.getElementById("dois")
var vinteDois = window.document.getElementById("vinteDois")
var tres = window.document.getElementById("tres")
var quatro = window.document.getElementById("quatro")
var completo = window.document.getElementById("completo")
var tente = window.document.getElementById("tente")
var seuNome = window.document.getElementById("seunome")


function DizerNAO1() {
NAO1.style =  "display:none"
NAO2.style = "display:flex"
}
function DizerNAO2() {
    NAO2.style = "display:none"
    NAO3.style = "display:flex"
}
function DizerNAO3() {
    NAO3.style = "display:none"
    NAO4.style = "display:flex"
}
function DizerNAO4() {
    NAO4.style = "display:none"
    NAO5.style = "display:flex"
}
function MENSAGEM() {
titulo2.style = "display:flex"
imagem.src = "transferir.jpeg"
}


function DizerSIM() {
sim.style = "display:none"
NAO1.style = "display:none"
NAO2.style = "display:none"
NAO3.style = "display:none"
NAO4.style = "display:none"
NAO5.style = "display:none"
ENVIAR.style = "display:flex"
label.style = "display:flex"
formulario1.style = "display:flex"
imagem.style = "display:none"
titulo2.style = "display:none"
titulo1.style = "display:none"
seuNome.style = "display:flex"
}
function Certa() {
matematica.style = "display:none"
completo.style = "display:flex"
tente.style = "display:none"
}
function errada2() {
tente.style ="display:flex"
}