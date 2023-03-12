let menuAbrir = document.querySelector('.menuAbrir');
let menuFexar = document.querySelector('.menuFexar');
let menuLateral = document.querySelector('.menuLateral');
let trocar = document.querySelector('.trocar');
let fonteficando = document.querySelector('.fonteficando');
let baixarCurriculo = document.querySelector('.baixarCurriculo');
let baixarCurriculo1 = document.querySelector('.baixarCurriculo1');

menuAbrir.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
    menuAbrir.classList.toggle('menuAbrirFexar');
    menuFexar.classList.toggle('menuFexarAbrir');
});

menuFexar.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
    menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
});
/*
window.addEventListener("scroll", () => {
    let containerCabecalho = document.querySelector(".containerCabecalho");
    fonteficando.classList.toggle('fontificar', window.scrollY > 0);
    containerCabecalho.classList.toggle('suavizar', window.scrollY > 0);
});
*/
baixarCurriculo.addEventListener('click', function () {
    window.open('../pdf/curriculoNhanga.pdf', '_blank');
});


const slider = document.querySelectorAll('.slide');
const prev1 = document.querySelector('#prev');
const next1 = document.querySelector('#next');

let correntSlide = 0;

function hedSlide() {
    slider.forEach(item => item.classList.remove('ligado'))
}
function showSlide(){
    slider[correntSlide].classList.add('ligado')
}


function nextSlider(){
    hedSlide()
    if(correntSlide==slider.length-1){
        correntSlide = 0
    }
    else{
        correntSlide++
    }
    showSlide();
}
            <section>
                <button id="prev"><</button>
                <section class="slideImagem">
                    <img src="img/nhanga1.PNG" class="ligado slide">
                    <img src="img/nhanga.PNG" class="slide">
                    
                </section>
                <button id="next">></button>
            </section>
function prevSlider(){
    hedSlide();
    if(correntSlide == 0){

        correntSlide=slider.length-1;
    }
    else{
        correntSlide--;
    }
    showSlide();
}

/**/
const prev1 = document.querySelector('#prev');

prev1.addEventListener('click', function () {
    alert("oi");
});
/*
prev1.addEventListener('click', );

next1.addEventListener('click', nextSlider);*/