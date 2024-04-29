import React from "react";
import "./ShopCategoryList.css";
import { Link } from "react-router-dom";

const ShopCategoryList = () => {
  return (
    <div className="shopCategory">
      <div className="shopCategory_head">Category</div>
      <ul className="shopCategory_list">
        <li>
          <Link to="/shop">
            <span className="bullet" />
            Bandage
          </Link>
        </li>
        <li>
          <Link to="/capsules">
            <span className="bullet" />
            Capsules
          </Link>
        </li>
        <li>
          <Link to="/digital-thermometer">
            <span className="bullet" />
            Digital Thermometer
          </Link>
        </li>
        <li>
          <Link to="/eat-thermometer">
            <span className="bullet" />
            Eat Thermometer
          </Link>
        </li>
        <li>
          <Link to="/first-aid">
            <span className="bullet" />
            First Aid
          </Link>
        </li>
        <li>
          <Link to="/medicine">
            <span className="bullet" />
            Medicine
          </Link>
        </li>
        <li>
          <Link to="/pedometer">
            <span className="bullet" />
            Pedometer
          </Link>
        </li>
        <li>
          <Link to="/pharmacies">
            <span className="bullet" />
            Pharmacies
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Pills
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Safety Kit
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Support Stick
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Table
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Testing Kit
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Thermometer
          </Link>
        </li>
        <li>
          <Link to="/pills">
            <span className="bullet" />
            Wheel Chair
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopCategoryList;
