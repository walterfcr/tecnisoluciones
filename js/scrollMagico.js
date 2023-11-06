//Elasticidad botones menu
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //selector: 'a.nav-link', 
        // 2 seg equivale a 2000)  
        speed: 300,
        //aceleraciones
        easing: 'easeInQuart',
        //easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });

});


//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";


//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("flechabtn").style.display = "block";
        document.getElementById("logo").style.display = "none";
        document.getElementById("container").style.backgroundColor = "#242222";
        document.getElementById("container").style.width = "100%";
        document.getElementById("listaMenu").style.textAlign = "center";



    } else {
        document.getElementById("flechabtn").style.display = "none";
        document.getElementById("logo").style.display = "initial";
        document.getElementById("container").style.backgroundColor = "initial";
        document.getElementById("container").style.width = "90%";
   
    }
}




//Funcián Scrolltop (Jquery)
function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}