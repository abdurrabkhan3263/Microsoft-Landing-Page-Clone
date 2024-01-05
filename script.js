// NAVIGATION BAR JAVASCRIPT

const navText = document.querySelectorAll('.nav-un-animation');
navText.forEach((value)=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.borderBottom = '1px solid black';
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.borderBottom = 'none';
    })
})

const stripText = document.querySelector('.strip-text');
const stripArrow = document.querySelector('.strip-arrow');

stripText.addEventListener('mouseenter' , ()=>{
    stripArrow.style.transform = `translateX(6px)`
})
stripText.addEventListener('mouseleave' , ()=>{
    stripArrow.style.transform = `translateX(0px)`
})

// IMAGE - SLIDER
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const arrowRight = document.querySelector('.slide-arrow-right');
const arrowLeft = document.querySelector('.slide-arrow-left');
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const cirBtn1 = document.querySelector('.slide-circle-btn1')
const cirBtn2 = document.querySelector('.slide-circle-btn2')


arrowRight.addEventListener('mouseenter' , (e)=>{
    arrowRight.style.transform = 'translateX(8px)'
})
arrowRight.addEventListener('mouseleave' , (e)=>{
    arrowRight.style.transform = 'translateX(0px)'
})
arrowLeft.addEventListener('mouseenter' , (e)=>{
    arrowLeft.style.transform = 'translateX(-8px)'
})
arrowLeft.addEventListener('mouseleave' , (e)=>{
    arrowLeft.style.transform = 'translateX(0px)'
})

// SLIDER ANIMATION
function cirBtnR(){
    cirBtn1.classList.remove('fa-solid');
    cirBtn1.classList.add('fa-regular')
    cirBtn2.classList.add('fa-solid')
}

function cirBtnL(){
    cirBtn2.classList.remove('fa-solid');
    cirBtn2.classList.add('fa-regular')
    cirBtn1.classList.add('fa-solid')
}

function sliderAni(value){
    if(value === true){
        slider2.style.transform = `translate(-1950px)`
        slider1.style.transform = `translate(0px)`
    }
    else if(value === false){
        slider2.style.transform = `translate(0px)`
        slider1.style.transform = `translate(1950px)`
    }
}

arrowRight.addEventListener('click' , (e)=>{
    cirBtnR()
    sliderAni(true)
})

arrowLeft.addEventListener('click' , ()=>{
    cirBtnL()
    sliderAni(false)
})

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

const deviceContainerA = document.querySelectorAll('.device-container-a');



deviceContainerA.forEach(value=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.textDecoration = `underline`;
        event.target.nextElementSibling.style.transform = `translate(11px)`;
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.textDecoration = `none`;
        event.target.nextElementSibling.style.transform = `translate(5px)`;
    })
})

// FOOTER ANIMATION

const footerLi = document.querySelectorAll('.footer-underline-ani');

footerLi.forEach((value)=>{
    value.addEventListener('mouseenter' , (event)=>{
        event.target.style.textDecoration = `underline`
    })
    value.addEventListener('mouseleave' , (event)=>{
        event.target.style.textDecoration = `none`
    })
})

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelector('.up-btn').addEventListener(('click') , function(){
    scrollTop();
})


