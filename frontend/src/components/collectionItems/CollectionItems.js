import React from 'react';
import "./CollectionItems.css";
import collectionItems from "../../data/collectionPageData/CollectionPageData";
import { Link } from "react-router-dom";

const CollectionItems = () => {
    const items = collectionItems.map((item)=>
        <div className='collecitonItemsCard' key={item.id}> 
            <Link to={'/shop'} className='collecitonItemsCard_img'><img src={item.cover_img} alt="item" /></Link>
            <div className='collectionItemsCard_text'>
                <Link to={'/shop'} className='collecitonItemsCard_head'>{item.heading}</Link>
                <div className='collecitonItemsCard_itemLeft'>{item.itemsLeft} Items</div>
                <Link to={'/shop'}><button className='collecitonItemsCard_btn'>Read More</button></Link>
            </div>
        </div>
    )
  return (
    <div className='collectionItems'>
        {items}
    </div>
  )
}

export default CollectionItems;