const slider = document.querySelector('.slider');
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const slides = Array.from(document.querySelectorAll('.slide'));
const slidesLenght = slides.length;
let slideIndex = 0;

prevbtn.addEventListener('click', goToPrevSlide);
nextbtn.addEventListener('click', goToNextSlide);

function goToPrevSlide(){
    slideIndex = slideIndex - 1;
    if (slideIndex < 0){
        slideIndex = slidesLenght - 1;
    }
    showSlide(slideIndex);
}

function goToNextSlide(){
    slideIndex = slideIndex + 1;
    if (slideIndex >= slidesLenght){
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(){
    slides.forEach((slide, index) => {
        if (index === slideIndex){
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

//accorgion

const acc = document.querySelectorAll('.accordion');

for (let i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function () {
        this.ClassList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.cssText = `max-height: ${null}; padding: 0px;`
        } else {
            panel.style.cssText = `max-height: ${panel.scrollHeight+20}px;
                                    padding: 10px 30px`           
        }
    })
}

//burger

const menu = document.querySelector('.menu');
const span = document.querySelector('.menu-burger_header')

span.addEventListener('click', () => {
    menu.ClassList.toggle('active');
})


const btns = document.querySelectorAll('.tabs__btn');

btns.forEach( btn => {
    btn.addEventListener('click' ,() => {
        const Item  = document.querySelector('.tabs__block._active')
        const ItemBtn  = document.querySelector('.tabs__btn._active')

        if (Item) {
            Item.classList.remove('_active')
        }

        if (ItemBtn){
            ItemBtn.classList.remove('_active')
        }

        const nextItemBtn = `#${btn.getAttribute('data-tab')}`
        const nextItem = document.querySelector(nextItemBtn);

        btn.classList.add('_active');
        nextItem.classList.add('_active');
    })
})

//game

const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');

document.addEventListener('keydown', function(event){
    jump();
})

function jump() {
    if (!dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue(top));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue(left));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150){
        alert('game over')
    }
}, 10)

