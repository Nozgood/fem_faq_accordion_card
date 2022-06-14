const ask = document.querySelectorAll('div.card__content-questions');

ask.forEach(a => {
    a.addEventListener('click', () => {
        if (a.classList.contains('card__content-questions--active')) {
            a.classList.replace('card__content-questions--active', 'card__content-questions')
        } else {
            ask.forEach(a => {
                a.classList.replace('card__content-questions--active', 'card__content-questions')
            })
            a.classList.replace('card__content-questions', 'card__content-questions--active');
        }
    })
})
