// Ao rolar para baixo tira o Transparent e Aparece o Fundo do Header
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Declarando Variáveis
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header2 = document.querySelector('#header');

// Ao clicar no menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    header2.classList.toggle('header2'); 
    // muda a classe para header2 e puxa do css
    // ao clicar no menu hamburguer não deixa o fundo do logo ficar transparent
};

// Ao scrollar depois de ter clicado no Menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
    header2.classList.remove('header2');
    // Tira a classe header2 para parar de puxar o CSS dessa Classe e voltar a ficar Transparent
};

// Swiper - Animação Produtos
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });