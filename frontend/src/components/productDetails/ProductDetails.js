import { useState } from "react";

import "./ProductDetails.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StarRating from "../ourProducts/starRating/StarRating";
import {
  FaRegHeart,
  FaFacebook,
  FaDelicious,
  FaStumbleupon,
  FaTwitter,
  FaDigg,
} from "react-icons/fa";

import {
  useGetProductDetailsQuery,
} from "../../slices/productsApiSlice";
import Loader from "../loader/Loader";
import { addToCart } from "../../slices/cartSlice";
import Message from "../Message.js";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  console.log(product);
  const images = [
    {
      original:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-17.jpg",
      thumbnail:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-17.jpg",
    },
    {
      original:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-16.jpg",
      thumbnail:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-16.jpg",
    },
    {
      original:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-18.jpg",
      thumbnail:
        "https://medik.wpenginepowered.com/wp-content/uploads/2020/05/shop-4-18.jpg",
    },
  ];

  const decreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const increaseQuantity = () => {
    setQty(qty + 1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="productDetails">
          <div className="left">
            <ImageGallery
              items={images}
              showPlayButton={false}
              className="left_gallery"
            />

          </div>
          <div className="right">
            {product && (
              <div className="rightContent">
                <div className="rightContent_head">{product.name}</div>
                <div className="rightContent_price">₹{product.price}</div>
                <div className="rightContent_rating">
                  <StarRating rating={product.rating} />({product.numReviews}{" "}
                  Customer Review)
                </div>
                <p>{product.description}</p>
                <table className="rightContent_table">
                  {/* <tr>
                      <td className='rightContent_table_prop'>Color:</td>
                      <td className='rightContent_table_detail'>{product.color}</td>
                    </tr> */}
                  <tr>
                    <td className="rightContent_table_prop">Stock: </td>
                    <td className="rightContent_table_detail">
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </td>
                  </tr>
                  <tr>
                    <td className="rightContent_table_prop">Brand:</td>
                    <td className="rightContent_table_detail">
                      {product.brand}
                    </td>
                  </tr>
                  {/* <tr>
                      <td className='rightContent_table_prop'>Material:</td>
                      <td className='rightContent_table_detail'>{product.material}</td>
                    </tr> */}
                  <tr>
                    <td className="rightContent_table_prop">Product Type:</td>
                    <td className="rightContent_table_detail">
                      {product.category}
                    </td>
                  </tr>
                </table>
              </div>
            )}
            <div className="right_cartManage">
              <div className="right_cartManage_q">
                <button
                  className="right_cartManage_qbtn"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <div className="right_cartManage_quantity">{qty}</div>
                <button
                  className="right_cartManage_qbtn"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="right_addToCartBtn"
                disabled={product.countInStock === 0}
                onClick={addToCartHandler}
              >
                Add To Cart
              </button>
            </div>
            <button className="right_addWishList">
              <span>
                <FaRegHeart />
              </span>
              Add to Wishlist
            </button>
            <div>
              <span>
                <b>Share:</b>
              </span>
              <button className="right_shareBtns">
                <FaFacebook />
              </button>
              <button className="right_shareBtns">
                <FaDelicious />
              </button>
              <button className="right_shareBtns">
                <FaDigg />
              </button>
              <button className="right_shareBtns">
                <FaStumbleupon />
              </button>
              <button className="right_shareBtns">
                <FaTwitter />
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
