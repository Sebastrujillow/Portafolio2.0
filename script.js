let menuVisible = false;

//función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false 
}

//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades(0).classList.add(HTML);
        habilidades(1).classList.add(CSS);
        habilidades(2).classList.add(Javascript);
        habilidades(3).classList.add(Videoeditor);
        habilidades(4).classList.add(Photoshop);
        habilidades(5).classList.add(Diseñoyanimación3D);
    }
}


//detectó el scrolling para ajustar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}