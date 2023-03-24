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
    location.href = "indicaciones.html"
}
function redir_contacto(){
    location.href = "contacto.html"
}
function redir_obras_sociales(){
    location.href = "indicaciones.html#obras-sociales"
}