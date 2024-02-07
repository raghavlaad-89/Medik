import React from 'react';
import "./SanitizerCard.css";

const SanitizerCard = () => {
  return (
    <div className='twoCards'>
        <div className='sanitizerCard'>
            <div className='sanitizerCard_head1'>Save 20%</div>
            <div className='sanitizerCard_head2'>On Sanitizers</div>
            <div className='sanitizerCard_head3'>99.9% Germ Production</div>
            <button className='sanitizerCard_button'>Shop Now</button>
        </div>
        <div className='gearCard'>
            <div className='gearCard_head1'>15% Off</div>
            <div className='gearCard_head2'>Protective Gears</div>
            <div className='gearCard_head3'>Covid Protection</div>
            <div className='btn'>
                <button className='gearCard_button'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default SanitizerCard