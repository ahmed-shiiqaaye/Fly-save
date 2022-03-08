let menu = document.querySelector('.menu');
let times = document.querySelector('.times');
let links = document.querySelector('.links');
menu.addEventListener('click',function(){
    links.classList.toggle('active')
})
times.addEventListener('click',function(){
    links.classList.remove('active')
})

let signIn = document.querySelectorAll('.sign-in');
let popUp = document.querySelector('.pop');
console.log(popUp)
signIn.forEach((sing,i) =>{
    console.log(sing,i)
    sing.addEventListener('click',(e)=>{
        popUp.classList.add('active')
        console.log(e)
    })
})