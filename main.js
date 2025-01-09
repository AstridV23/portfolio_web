// funcion que aplica el estilo a la opción seleccionada del menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => {
        opcion.classList.remove("seleccionado");
    });
    link.classList.add("seleccionado");

    // desaparece el menu una vez que se seleccionó una opción en el modo responsive
    var x = document.getElementById("nav");
    x.classList.remove("responsive");
}

// funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// funcion que aplica la animación de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("java").classList.add("barra-progreso1");
        document.getElementById("cs").classList.add("barra-progreso2");
        document.getElementById("c").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("py").classList.add("barra-progreso5");
        document.getElementById("dw").classList.add("barra-progreso6");
        document.getElementById("git").classList.add("barra-progreso7");
    }
}