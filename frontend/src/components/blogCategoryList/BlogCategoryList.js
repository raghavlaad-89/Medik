import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogCategoryList.css";

const BlogCategoryList = () => {
  return (
<div className="blogCategory">
    <div className="blogCategory_head">Category</div>
      <ul className="blogCategory_list">
        <li>
          <Link to="/aroma-therapy">
            <span className="bullet" />
            Aroma Therapy
          </Link>
        </li>
        <li>
          <Link to="/audio">
            <span className="bullet" />
            Audio
          </Link>
        </li>
        <li>
          <Link to="/massage">
            <span className="bullet" />
            Massage
          </Link>
        </li>
        <li>
          <Link to="/phiscotherapy">
            <span className="bullet" />
            Phiscotherapy
          </Link>
        </li>
        <li>
          <Link to="/reiki">
            <span className="bullet" />
            Reiki
          </Link>
        </li>
        <li>
          <Link to="/sanitize">
            <span className="bullet" />
            Sanitize
          </Link>
        </li>
        <li>
          <Link to="/steam-bath">
            <span className="bullet" />
            Steam Bath
          </Link>
        </li>
        <li>
          <Link to="/temperature">
            <span className="bullet" />
            Temperature
          </Link>
        </li>
        <li>
          <Link to="/test">
            <span className="bullet" />
            Test
          </Link>
        </li>
        <li>
          <Link to="/treatment">
            <span className="bullet" />
            Treatment
          </Link>
        </li>
        <li>
          <Link to="/video">
            <span className="bullet" />
            Video
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BlogCategoryList;