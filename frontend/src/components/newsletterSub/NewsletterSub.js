import React from 'react';
import "./NewsletterSub.css";

const NewsletterSub = () => {
  return (
    <div className="newsletter-form">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Sign-up to get the latest offers and news and stay updated.</p>
        <form className='newsletter-form-group'>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NewsletterSub