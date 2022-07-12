// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#burger').addEventListener('click', function() {
//     document.querySelector('#burger-open').classList.toggle('active')
//       document.querySelector('#burger-span').classList.toggle('active')
//   })
// })


let burger = document.querySelector('.header-content__burger');
let menu = document.querySelector('.burger-open');
let span = document.querySelector('.header-content__burger__span');
let menuLinks = menu.querySelectorAll('.burger__link');
let list = document.querySelector('.burger__list');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    span.classList.toggle('active');
    list.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    span.classList.remove('active');
    document.body.classList.remove('no-scroll');
  })
})

