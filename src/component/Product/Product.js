import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;