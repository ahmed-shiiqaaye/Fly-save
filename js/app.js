let menu = document.querySelector('.menu');
let times = document.querySelector('.times');
let links = document.querySelector('.links');
menu.addEventListener('click',function(){
    links.classList.toggle('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})