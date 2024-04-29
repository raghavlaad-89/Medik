import React from 'react';
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <div className='wishlist'>
        <h1>My wishlist on Clone</h1>
        <table className='wishlist_table'>
            <thead className='wishlist_table_head'>
                <tr className='wishlist_table_head_r'>
                    <th className='wishlist_table_head_r_head'>PRODUCTS</th>
                    <th className='wishlist_table_head_r_head'>PRICE</th>
                    <th className='wishlist_table_head_r_head'>STATUS</th>
                </tr>
            </thead>
            <tbody className='wishlist_table_body'>
            No products were added to the wishlist
            </tbody>
        </table>
    </div>
  )
}

export default Wishlist