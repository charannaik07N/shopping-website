document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    
    document.querySelectorAll('.product button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;
            
            const productObj = {
                name: productName,
                price: productPrice,
                quantity: 1
            };
            
            const existingProductIndex = cart.findIndex(item => item.name === productName);
            if (existingProductIndex >= 0) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(productObj);
            }
            
            console.log(cart);
        });
    });
});
