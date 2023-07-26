const nav= document.querySelector("#nav1");
const cerrar= document.querySelector("#cerrar");
const abrir= document.querySelector("#abrir");

const inicio= document.querySelector("#inicio");
const inidicaciones= document.querySelector("#indicaciones");
const contacto= document.querySelector("#contacto");





abrir.addEventListener("click",()=>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible")

})

inicio.addEventListener("click",()=>{
    nav.classList.remove("visible");
    location.href = "index.html"


})

inidicaciones.addEventListener("click",()=>{
    nav.classList.remove("visible");
    location.href = "indicaciones.html"


})

contacto.addEventListener("click",()=>{
    nav.classList.remove("visible");
    location.href = "contacto.html"


})





/*  Funciones de redireccion de las secciones de inicio */
function redir_indicaciones(){
    location.href = "indicaciones.html"
}
function redir_contacto(){
    location.href = "contacto.html"
}
function redir_obras_sociales(){
    location.href = "indicaciones.html#obras-sociales"
}