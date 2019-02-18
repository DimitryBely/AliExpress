const   cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

function openCart() {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cart.style.display = 'none';
    document.body.style.overflow = '';
}

open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);