let menu = document.querySelector('.menu');
let times = document.querySelector('.times');
let links = document.querySelector('.links');
menu.addEventListener('click',function(){
    links.classList.toggle('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})

// slidfer
let slider = document.querySelectorAll('.slider');
let teaName = document.querySelector('.namess'); 
let teaJop = document.querySelector('.jop'); 
let teapara = document.querySelector('.para'); 
let teaImg = document.querySelector('.t-image'); 
let nextBtn = document.querySelector('.btn.plus'); 

console.log(teaName)
let teachersArray = [
    {
     name:"Dr. Taariq Osman",
    jop:"health consaltant",
    img:"./img/ben-kolde-bs2Ba7t69mM-unsplash.jpg",
    para:"I'm psychological doctor and leader mental treatment group, we helped many petients mentality and now they are healthy 100%.we are ready to help you."
    },
    {
    name:"Prof Malik",
    jop:"software engineer",
    img:"./img/arif-riyanto-G1N9kDHqBrQ-unsplash.jpg",
    para:"Moha is me.i am tutor of thousands of students in this hana akademi. we produce thousands of developers each year. welcome the world of technologies,developer and programmers.jion us learn how to code."
    },
    {
    name:"prof Hafsa mo'al",
    jop:"health consaltant",
    img:"./img/doctor-mako-YeTNPJQW8Yo-unsplash.jpg",
    para:"I'm Hafsa. ceo of HANANdigital marketing group (HDMG) we offer the products from the componies we are patner to the costumers and the selling shoppies.learn today earn tomorrow" 
    }
]
let counter = 1;
console.log(teachersArray[counter])
window.addEventListener('DOMContentLoaded',function(){
    if(counter > teachersArray.length - 1){
        counter = 0;
    }
    showperson(counter)
})

function showperson(person){
    let item = teachersArray[person];
    teaName.textContent = item.name
    teaJop.textContent = item.jop
    teapara.textContent = item.para
    teaImg.src = item.img
}
nextBtn.addEventListener('click',function(){
    counter++
    if(counter > teachersArray.length - 1){
        counter = 0;
    }
    showperson(counter)
})


let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo .o');


window.addEventListener('scroll',function(){
    let navh = navbar.getBoundingClientRect().height;
    let scrolH = window.pageYOffset;
    if(scrolH > navh){
        navbar.classList.add('fixed-nav')
        logo.classList.add('white')
    }else{
        navbar.classList.remove('fixed-nav')
        logo.classList.remove('white')

    }
    console.log(scrolH)
})