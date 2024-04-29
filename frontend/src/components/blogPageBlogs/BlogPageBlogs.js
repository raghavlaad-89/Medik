import React from 'react';
import "./BlogPageBlogs.css";
import { Link } from 'react-router-dom';
import allBlogData from '../../data/allBlogData/AllBlogData';
import { FaCalendar } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaTag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const BlogPageBlogs = () => {
    const items = allBlogData.map((item) =>
        <div className='blogCard' key={item.id}>
            <Link to={`/blogs/${item.id}`} className='blogCard_img' 
            >
                <img src={item.cover_img}  alt={item.alt} />
            </Link>
            <div className='blogCard_imgBottom'>
                <div className='blogCard_imgBottom_content'>
                    <FaCalendar className='blogCard_imgBottom_content_icon' />
                    <span>{item.date}</span>
                </div>
                <div className='blogCard_imgBottom_content'>
                    <BiSolidMessageRounded className='blogCard_imgBottom_content_icon' />
                    <span>{item.numberOfComments} Comments</span>
                </div>
            </div>
            <Link to={`/blogs/${item.id}`} className='blogCard_head'>{item.blogName}</Link>
            <p className='blogCard_shortDesc'>{item.shortDescription}</p>
            <div className='blogCard_category'>
                <FaTag className='blogCard_category_icon' />
                {/* {allBlogData.category && allBlogData.category.length > 0 &&
                <div>{allBlogData.category.join(', ')}</div>
                } */}
                Fun, Treat
            </div>
            <button className='blogCard_btn'>Read More <IoIosArrowForward /> </button>

        </div>
    )
  return (
    <div className='blogCards'>
        {items}
    </div>
  )
}

export default BlogPageBlogs