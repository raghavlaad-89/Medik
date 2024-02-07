import React from 'react';
import "./NavigationTop.css";

const NavigationTop = (props) => {
    const { path } = props
  return (
    <div className='navigationTop'>
        <div className='navigationTop_head'>{path}</div>
        <div className='navigationTop_path'>
            <a href="/" className='link'>Home</a> / {path}
        </div>
    </div>
  )
}

export default NavigationTop