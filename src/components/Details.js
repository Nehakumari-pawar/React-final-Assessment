import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import currencyFormatter from "currency-formatter";
import StarIcon from '@material-ui/icons/Star';
//import ProductsReducer from '../store/reducers/ProductsReducer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);

    

    useEffect(() => {
       dispatch({type: 'PRODUCT', id})                
    }, [id,dispatch])

    const decQuantity = () => {                        //Managing the quantity of the product
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

const addToCart= () =>
{
    dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })    //function to add the product to cart
}

const diffToast =() =>
{
            
    toast.success("Item added to cart...",{ position:"bottom-right"});  //To show the toast
} 

const cartAndNotification=()=>{
    addToCart();
    diffToast();
}

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={product.image_link} alt=""/>
                        <div>
                            <div className="nav__left">
                        </div> 
                    
                    </div>
                </div>
            </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                <div className="details__prices">
                    <span className="details__actaul">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
     
                <div  className='rating'> {product.rating} <StarIcon /></div>
    
            </div>
                <div className="details__info">
                    <div className="details__incDec">
                        <span className="dec" onClick={decQuantity}>-</span>
                            <span className="quantity">{quantity}</span>
                                <span className="inc" onClick={() => setQuantity(quantity+1)}>+</span>
                                    <button className="btn-default" onClick={cartAndNotification}>add to cart</button>
                    </div> 
                </div> 
                <div className="details__p">
                    <h4>Details</h4>
                    {product.description}
                </div>
            </div>
           </div>

            <ToastContainer/>
        </div>
    )
}

export default Details
