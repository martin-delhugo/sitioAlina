const nav= document.querySelector("#nav1");
const cerrar= document.querySelector("#cerrar");
const abrir= document.querySelector("#abrir");

abrir.addEventListener("click",()=>{
    nav1.classList.add("visible")
})

cerrar.addEventListener("click",()=>{
    nav1.classList.remove("visible")

})

/*  Funciones de redireccion de las secciones de inicio */
function redir_indicaciones(){
    nav1.classList.remove("visible")
    location.href = "indicaciones.html"
}
function redir_contacto(){
    nav1.classList.remove("visible")
    location.href = "contacto.html"
}
function redir_obras_sociales(){
    nav1.classList.remove("visible")
    location.href = "indicaciones.html#obras-sociales"
}