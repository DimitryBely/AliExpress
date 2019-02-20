window.addEventListener('DOMContentLoaded', () => {
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

    goodsBtn.forEach(function(btn, i) {
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cartWrapper.querySelector('.empty');

            trigger.remove();

            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);

            cartWrapper.appendChild(item);
            if(empty) {
                empty.style.display = 'none';
            }

            let price = +products[i].querySelector('.goods__price > span').textContent;
            totalCost.textContent += price;

            showConfirm();

            removeItem();
            calcGoods(1);
            calcTotal();
        });
    });

    function sliceTitle() {
        titles.forEach(function(item){
            if(item.textContent.length > 70){
                item.textContent = item.textContent.slice(0, 71) + '...';
            }
        });
    }
    sliceTitle();

    function showConfirm() {
        confirm.style.display = 'block';
        let counter = 100;
        const interval = setInterval(frame, 5);
        function frame() {
            if(counter == 10){
                clearInterval(interval);
                confirm.style.display = 'none';
            } else {
                counter--;
                confirm.style.transform = `translateY(-${counter}px)`;
                confirm.style.opacity = `0.${counter}`;
            }
        }
    }

    function calcGoods(i) {
        const items = cartWrapper.querySelectorAll('.goods__item');
        badge.textContent = items.length;
    }

    function calcTotal() {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
        let total = 0;
        prices.forEach(function(item) {
            total += +item.textContent;
        });
        totalCost.textContent = total;
    }

    function removeItem() {
        const removeBtn = cartWrapper.querySelectorAll('.goods__item-remove');
        removeBtn.forEach(function(btn) {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();

                calcGoods(-1);
                calcTotal();

                if(badge.textContent == 0){
                    cartWrapper.querySelector('.empty').style.display = 'block';
                }
            });
        });
    }
});

