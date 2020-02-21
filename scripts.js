const modalOverlay = document.querySelector('.modal__overlay')
const cards = document.querySelectorAll('.modal__close i')
const firstModalClose = document.querySelector('#firstModalClose i')

for (let card of cards) {
    card.addEventListener("click", function menuOverlay() {
        modalOverlay.classList.toggle('active')

        if(!modalOverlay.classList.contains('active')) {
            firstModalClose.classList.add('hide')
        }
        if(modalOverlay.classList.contains('active')){
            firstModalClose.classList.remove('hide')
        }
    })
}

