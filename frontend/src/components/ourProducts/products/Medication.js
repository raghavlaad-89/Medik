import React from 'react';
import medicationData from '../../../data/ourProducts/MedicationData';
import StarRating from '../starRating/StarRating';
import "./card.css";

const Medication = () => {
  const listItems = medicationData.map((item)=>
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

export default Medication;