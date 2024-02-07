import React from 'react';
import laboratoryData from '../../../data/ourProducts/LaboratoryData';
import StarRating from '../starRating/StarRating';
import "./card.css";

const Laboratory = () => {
  const listItems = laboratoryData.map((item)=>
    <div className='productCard' key={item.id}>
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
    <div className='products_main_content'>
      {listItems}
    </div>
  )
}

export default Laboratory;