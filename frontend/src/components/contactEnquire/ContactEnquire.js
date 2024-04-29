import React, { useState } from 'react';
import GoogleMap from './GoogleMap';
import "./ContactEnquire.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiStopwatch } from "react-icons/ci";

const ContactEnquire = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
  return (
    <div>
        <GoogleMap />
        <div className='contactDivs'>
            <div className='contactLeft'>
                <div className='contactLeft_head'>Contact Info</div>
                <div className='contactLeft_para'>Pellentesque posuere orci lobortis scelerisque blandit. 
                    Donec id tellus lacinia an, tincidunt risus ac
                </div>
                <div className='contactLeft_cards'>
                    <div className='contactLeft_card'>
                        <div className='contactLeft_card_icon'><FaPhone /></div>
                        <div className='contactLeft_card_head'>TALK TO US</div>
                        <div className='contactLeft_card_l1'>Toll-Free: 0803 – 080 – 3081</div>
                        <div className='contactLeft_card_l2'>0803 – 080 – 3081</div>
                    </div>
                    <div className='contactLeft_card'>
                        <div className='contactLeft_card_icon'><MdEmail /></div>
                        <div className='contactLeft_card_head'>CONTACT US</div>
                        <div className='contactLeft_card_l1'>domainname@example.com</div>
                        <div className='contactLeft_card_l2'>support@example.com</div>
                    </div>
                    <div className='contactLeft_card'>
                        <div className='contactLeft_card_icon'><FaLocationDot /></div>
                        <div className='contactLeft_card_head'>OUR LOCATION</div>
                        <div className='contactLeft_card_l1'>625 @ David Blake Road,</div>
                        <div className='contactLeft_card_l2'>Adventureland, USA</div>
                    </div>
                    <div className='contactLeft_card'>
                        <div className='contactLeft_card_icon'><CiStopwatch /></div>
                        <div className='contactLeft_card_head'>OPENING HOURS</div>
                        <div className='contactLeft_card_l1'>Mon – Sat 9 am to 8 pm</div>
                        <div className='contactLeft_card_l2'>Sun – 10 am to 3 pm</div>
                    </div>
                </div>
            </div>
            <div className='contactRight'>
                <div className='contactRight_head'>Enquire Now</div>
                <div className='contactRight_para'>Pellentesque posuere orci lobortis scelerisque blandit. 
                    Donec id tellus lacinia an, tincidunt risus ac
                </div>
                <form className="contactRight_form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className='contactRight_form_btn'>Send Enquiry</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactEnquire