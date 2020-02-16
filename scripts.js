const modalOverlay = document.querySelector('.modal__overlay')
const cards = document.querySelectorAll('.modal__close')

for(let card of cards){
    card.addEventListener("click" ,function menuOverlay(){
        modalOverlay.classList.toggle('active')

        modalOverlay.classList.add('animation')
    })
}
