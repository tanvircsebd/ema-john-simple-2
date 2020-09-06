import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';



const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(product => product.key === productKey);
    return (
        <div>
            <h1> {productKey}Detail coming soonnnnnnn </h1>
            <Products showAddToCart={false} product = {product} ></Products>
        </div>
    );
};

export default ProductDetail;