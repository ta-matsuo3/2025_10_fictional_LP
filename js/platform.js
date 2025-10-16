// モーダル
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-close-button');

document.addEventListener('click', (e) => {
    if (e.target.closest(".js-modal-button")) {
        modal.classList.add('is-open');
    }
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('is-open');

});