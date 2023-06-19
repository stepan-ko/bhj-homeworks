const addButtons = document.querySelectorAll('.product__add');
const controlDec = document.querySelectorAll('.product__quantity-control_dec');
const controlInc = document.querySelectorAll('.product__quantity-control_inc');


//возвращает id и путь к изображению относительно кнопки
function getProduct(btn) {
    const product = btn.closest('.product');
    const id = product.dataset.id;
    const img = product.querySelector('.product__image').src;
    return { 'id': id, 'img': img }
}

//проверяет есть ли уже такой товар в корзине
function existProduct(id) {
    const cartProducts = document.querySelector('.cart__products').querySelectorAll('.cart__product');    
    for (const product of cartProducts) {
        if (product.dataset.id == id) {
            return true
        }
    }
    return false
}

//увеличить продукт на 1 по id
function increment(id) {
    const cartProducts = document.querySelector('.cart__products').querySelectorAll('.cart__product');    
    for (const product of cartProducts) {
        if (product.dataset.id === id) {
            const count = product.querySelector('.cart__product-count');
            count.textContent++;            
        }
    }
}

//уменьшить продукт на 1 по id
function decrement(id) {
    const cartProducts = document.querySelector('.cart__products').querySelectorAll('.cart__product');    
    for (const product of cartProducts) {
        if (product.dataset.id === id) {
            const count = product.querySelector('.cart__product-count');
            count.textContent--;   
            if (count.textContent == 0) {
                //удалить из корзины
                product.remove();
            }       
        }
    }
}


addButtons.forEach(addButton => {
    addButton.addEventListener('click', () => {
        const id = getProduct(addButton).id;
        const img = getProduct(addButton).img;

        if (existProduct(id)) {
            increment(id);
        } else {
            document.querySelector('.cart__products').insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">1</div>
            </div>
            `);
        }

    })
})


controlDec.forEach(dec => {
    dec.addEventListener('click', () => {
        const id = getProduct(dec).id;        
        decrement(id);        
    })
})


controlInc.forEach(inc => {
    inc.addEventListener('click', () => {
        const id = getProduct(inc).id;        
        increment(id);        
    })
})