document.addEventListener('DOMContentLoaded', function(){


const nav =document.querySelector('.navbar')
const btn = document.querySelector('.navbar-toggler')

const link = document.querySelectorAll('.nav-link')
const check = document.querySelector('.navbar-collapse')



    function addShadow(){
        if(window.scrollY >= 100){
            nav.classList.add('shadow-bg')
        }
        else{
            nav.classList.remove('shadow-bg')
        }
        

      
    }
    function buttonShadow(){
        if(window.scrollY == 0 || nav.classList.contains('shadow-bg')==true){
            nav.classList.add('shadow-bg')
        }else if(window.scrollY==0){
            nav.classList.remove('shadow-bg')
        }else{

        }

    }

    link.forEach(item => item.addEventListener('click',() => 
    check.classList.remove('show')))
    
    window.addEventListener('scroll', addShadow)
    btn.addEventListener('click', buttonShadow)
   

    




})