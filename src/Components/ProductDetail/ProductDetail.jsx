import React, { useEffect, useState } from "react";
import  { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { find } from '../../store/productSlice';
import Container from "../Container/Container";
import './productdetail.css'
import { addToCart } from "../../store/cartSlice";
////////
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';
import seven from '../../assets/7.jpg';
import eight from '../../assets/8.jpg';
import nine from '../../assets/9.jpg';
import ten from '../../assets/10.jpg';
import eleven from '../../assets/11.jpg';
import twelve from '../../assets/12.jpg';
import thirteen from '../../assets/13.jpg';
import fourteen from '../../assets/14.jpg';
import fifteen from '../../assets/15.jpg';

// import other images similarly

const images = {
    '1.jpg': one,
    '2.jpg': two,
    '3.jpg': three,
    '4.jpg': four,
    '5.jpg': five,
    '6.jpg': six,
    '7.jpg': seven,
    '8.jpg': eight,
    '9.jpg': nine,
    '10.jpg': ten,
    '11.jpg': eleven,
    '12.jpg': twelve,
    '13.jpg': thirteen,
    '14.jpg': fourteen,
    '15.jpg': fifteen,
    
    
};

function ProductDetail() {
    
    const carty = useSelector((state) => state.cart.cartProducts)
   

    console.log(carty)

    const prices = useSelector((state) => state.cart.totalPrize)
   

    console.log(prices)






    ////
    const [quantity,setQuantity] = useState(1)
    const dec = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)

        }
    }
    const {id} = useParams();
    const product = useSelector((state) => state.product.selectedProduct);
   const dispatch = useDispatch();
   
   useEffect(() => {
    dispatch(find(Number(id)));
}, [id, dispatch]);
   if (product) {
   }

   if (!product) {
    return <p>Loading...</p>;
}
if (product) {
return (
    <>
       <Container>
        <div className="detail">
            <div className="start">
                <img src={images[product.image]}  alt="hlo" />
                <p>
                    {product.name}
                </p>
            </div>
            <div className="end">
                <h2>
                    {product.description}
                </h2>
                <p className="id">id:{product.id}</p>
                <div className="sale">
                    <span className="left-sale">sale</span>
                    <span className="right-sale">Discount {product.discountPercentage}%</span>
                </div>
                <div className="price-detail">
                    <p>${product.originalPrice}</p>
                    <span>${product.discountPrice}</span>
                </div>
                <div className="quantity-box">
                    Quantity
                    <div className="b">
                        <button className="dec" onClick={dec}> -
                        </button>
                        <p>{quantity}</p>
                        <button className="dec" onClick={()=> setQuantity(quantity+1) }>+</button>
                    </div>
                </div>
                <button className="cart"
                onClick={() => {
                    dispatch(addToCart({product,quantity}))
                    console.log("hello")
                }}
                >
                    Add to  Cart
                </button>
              <div className="description">
                <span>
                    Details
                </span>
                <p>
                    {product.completeDetails}
                </p>
              </div>
            </div>
            
        </div>

       </Container>
    </>
);
    
}
}

export default ProductDetail;