const reviews = document.querySelector('.reviews');

initialData.forEach(el => { //Загрузка отзывов с базы
    const reviewSubBlock = document.createElement('div');
    const product = document.createElement('h3');

    reviewSubBlock.classList.add('review-subblock');
    product.classList.add('product');

    product.textContent = el.product;
    reviewSubBlock.appendChild(product);

    el.reviews.forEach(i => {
        const reviewId = document.createElement('span');
        const textReview = document.createElement('p');
        reviewId.classList.add('reviewer-id');
        textReview.classList.add('review-text');

        reviewId.textContent = `id: ${i.id}`;
        textReview.textContent = i.text;

        reviewSubBlock.appendChild(reviewId);
        reviewSubBlock.appendChild(textReview);
    })
    reviews.appendChild(reviewSubBlock);
});

const btn = document.querySelector('.btn');
const textArea = document.querySelector('#textarea');

btn.addEventListener('click', function() {
    if (textArea.value.length === 0) {
        textArea.style.border = '1px solid red';
        throw new Error('Поле не может быть пустым!');
    } else if (textArea.value.length > 500 || textArea.value.length < 50) {
        textArea.style.border = '1px solid red';
        throw new Error('Сообщение должно содержать не менее 50 и не более 500 символов!');
    } else {
        const reviewSubBlock = document.createElement('div');
        const product = document.createElement('h3');
        const reviewId = document.createElement('span');
        const textReview = document.createElement('p');

        reviewSubBlock.classList.add('review-subblock');
        product.classList.add('product');
        reviewId.classList.add('reviewer-id');
        textReview.classList.add('review-text');

        product.textContent = 'Toshiba Mouse';
        reviewSubBlock.appendChild(product);

        reviewId.textContent = `id: 011`;
        textReview.textContent = textArea.value;

        reviewSubBlock.appendChild(reviewId);
        reviewSubBlock.appendChild(textReview);
        reviews.appendChild(reviewSubBlock);
    }
})