import "./main.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import StarRating from '../ourProducts/starRating/StarRating.js';
import { useGetProductsQuery } from "../../slices/productsApiSlice.js";
import Loader from "../loader/Loader.js";
import Message from '../Message.js';
import Paginate from '../Paginate.js';


const AllProducts = () => {
    const { pageNumber, keyword } = useParams();
    const { data, isLoading, error } = useGetProductsQuery({
        keyword,
        pageNumber,
    });

    // Check if isLoading or error exists
    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Message variant="danger">{error?.data?.message || error.error}</Message>;
    }

    // Check if allProduct is defined before mapping over it
    const listItems = data.products.map((item) => (
        <div className='productCard' key={item._id}>
            <Link to={`/product/${item._id}`} className='productCard_img'>
                <img src={item.image} alt={item.alt} />
            </Link>
            <div className='productCard_btns'>
                <button className='productCard_quickView'>Quick View</button>
                <button className='productCard_addToCart'>Add To Cart</button>
            </div>
            <div className='productCard_name'>
                <h2>{item.name}</h2>
            </div>
            <div className='productCard_pr'>
                <div className='productCard_rating'>
                    <StarRating rating={item.rating} />
                </div>
                <div className='productCard_price'>₹{item.price}</div>
            </div>
        </div>
    ));

    return <div className='allProducts'>
        {listItems}
        <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
    </div>;
};



export default AllProducts;