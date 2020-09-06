import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        const toBeAddedkey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedkey)
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key!== toBeAddedkey)
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
            <h1>{ products.length}</h1>
                <ul>
                    {
                        products.map(product => <Products key = {product.key} product={product} showAddToCart = {true} handleAddProduct={handleAddProduct} ></Products>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                    <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;