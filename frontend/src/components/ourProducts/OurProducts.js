import React , { useState } from 'react';
import "./OurProducts.css";
import Medication from "./products/Medication";
import Drugs from "./products/Drugs";
import Laboratory from "./products/Laboratory";
import Equipments from "./products/Equipments";
import Radiology from "./products/Radiology";
import Devices from "./products/Devices";


const CardButton = ({ onClick, children, isSelected }) => {
  
  return (
  <button onClick={onClick} className='ourProducts_btn' style={{ backgroundColor: isSelected ? 'lightblue' : 'white' }}>
    {children}
  </button>
);
};


const OurProducts = () => {
  const [selectedComponent, setSelectedComponent] = useState(Medication);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div className='ourProducts'>
      <div className='ourProducts_heading'>
        Our Products
      </div>
      <div className='ourProducts_para'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </div>
      <div className='ourProducts_buttons'>
        <CardButton onClick={() => handleButtonClick(<Medication />)} isSelected={selectedComponent && selectedComponent.type === Medication}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Medication.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Medication
          </div>
        </CardButton>
        <CardButton onClick={() => handleButtonClick(<Drugs />)} isSelected={selectedComponent && selectedComponent.type === Drugs}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Drugs.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Drugs
          </div>
        </CardButton>
        <CardButton 
          onClick={() => handleButtonClick(<Laboratory />)} 
          isSelected={selectedComponent && selectedComponent.type === Laboratory}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Laboratory.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Laboratory
          </div>
        </CardButton>
        <CardButton onClick={() => handleButtonClick(<Equipments />)} isSelected={selectedComponent && selectedComponent.type ===Equipments}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Equipments.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Equipments
          </div>
        </CardButton>
        <CardButton onClick={() => handleButtonClick(<Radiology />)} isSelected={selectedComponent && selectedComponent.type === Radiology}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Radiology.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Radiology
          </div>
        </CardButton>
        <CardButton onClick={() => handleButtonClick(<Devices />)} isSelected={selectedComponent && selectedComponent.type === Devices}>
          <div className='btn_img'>
            <img src='https://medik.wpenginepowered.com/wp-content/uploads/2020/05/Devices.png' alt='img'></img>
          </div>
          <div className='btn_heading'>
            Devices
          </div>
        </CardButton>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {selectedComponent}
      </div>
    </div>
  )
};

export default OurProducts;