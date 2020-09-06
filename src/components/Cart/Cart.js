import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = (cart.reduce((total, product)=>total + product.price, 0));

    // reduce chara for loop diye

    let total = 0;
    for (let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price * product.quantity;
    }
    
    let shipping = 0;
    if( total >35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 0;
    }

    // const tax = Math.round(totalPrice /10); 
    const tax = Math.round(total /10);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + VAT: {formatNumber(tax)} </p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;