import React from 'react';
import "./SpecialProducts.css";
import specialData from "../../data/specialProducts/SpecialProductData";
import StarRating from '../ourProducts/starRating/StarRating';

const SpecialProducts = () => {
 
  const listItems = specialData.map((item)=>
    <div className='specialProductCard' key={item.id}>
      <div className='productCard_img'>
        <img src={item.cover_img} alt={item.alt} />
      </div>
      <div className='productCard_name'>
        <h2>{item.product_name}</h2>
      </div>
      <div>
        <StarRating rating={item.rating} />
      </div>
      <div className='productCard_price'>
        ₹{item.price}
      </div>
      <button className='productCard_addToCartButton'>
      Add To Cart
    </button>
    </div>
  )
  return (
    <div className='specialProducts'>
        <div className='specialProducts_head'>
            Special Products
        </div>
        <div className='specialProducts_para'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </div>
        <div className='specialProducts_content'>
            {listItems}
        </div>
    </div>
  )
}

export default SpecialProducts