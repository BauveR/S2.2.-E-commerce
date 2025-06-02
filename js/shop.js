// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    const addProduct = products.find( product => product.id === id);
    
    if (cart.some( product => product.id === id)){
        const index = cart.findIndex(product => product.id === id);
        cart[index].quantity++;

    } else{
        addProduct.quantity = 1; 
        cart.push(addProduct);
    }
    
    calculateTotal();
    printCart();

}

// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;

    printCart();

}

console.log(cart);

// Exercise 3
function calculateTotal() {
    total = 0;

         cart.forEach ((product) => {
            total += applyPromotionsCart(product);
         });

         return total;
       
    } 
    // Calculate total price of the cart using the "cartList" arra

// Exercise 4
function applyPromotionsCart(product) {

    let totalPrice;

    if (product.offer != null && product.quantity >= product.offer.number) {

        const discount = (product.price * product.offer.percent) / 100;
        const discountedPrice = product.price - discount;
        totalPrice = discountedPrice * product.quantity;
        return totalPrice;
    } else {
        totalPrice = product.price * product.quantity;
        return parseFloat(totalPrice.toFixed(2));
    }
    }

    // Apply promotions to each item in the array "cart"

// Exercise 5
function printCart() {

        var cartListContent =  "";

        cart.forEach ((product) => {
            cartListContent += `
        					<tr>
								<th scope="row">${product.name}</th>
								<td>${product.price}</td>
								<td>${product.quantity}</td>
								<td>${applyPromotionsCart(product)}</td>
                                <td>
                                <a href="javascript:void(0)" onclick="removeFromCart(${product.id})" class="btn btn-primary m-3">-</a>

                                
							</tr>
                            `
                            });


        document.getElementById('cart_list').innerHTML = cartListContent
        document.getElementById("total_price").textContent = total.toFixed(2);
        document.getElementById("count_product").textContent = calNumberish();

    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    const index = cart.findIndex(product => product.id === id);
    
    let productToRemove = cart[index];

    if (productToRemove.quantity == 1) {

        cart.splice(index,1);
    } else {

        productToRemove.quantity -= 1;

    }

 calculateTotal();
printCart();
}

function calNumberish(){

    let numberish = 0;

    cart.forEach ((product) => {
        numberish += product.quantity 
    });

    return numberish;
}



function open_modal() {
    printCart();
}