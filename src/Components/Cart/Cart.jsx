import React from 'react';
import './cart.css'
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
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Container/Container';
import { INC , DEC , removeFromCart } from '../../store/cartSlice';


function Cart() {
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
    '15.jpg': fifteen
}
    const dispatch = useDispatch();
     
    const product = useSelector((state) => state.cart.cartProducts)
    const productQuantity = useSelector((state) => state.cart.totalQuantity)
    const productPrize = useSelector((state) => state.cart.totalPrize)
    console.log(product.length)

    if (product) {
    }
 
    if (product.length === 0) {
     return(
       <>
       <Container>

       <p 
     style={{height:"100px" , width:"100%" , textAlign:"center" , marginTop:"120px"}}
     >Your cart is empty....</p>
       </Container>
       </>
    )
 }
   

   if( product) {
        return(
            <>
           <Container>
          
        <h1>Your Cart</h1>

       <div className="cart-box">
       <table className="product-table">
      <thead className='table-head'>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Action</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody className='table-body'>
      {product.map((item) => (
        <tr key={item.id}>
            <td><img src={images[item.image]} alt="" /></td>
            
            <td className='name'>{item.name}</td>
            <td>
            <div className="b">
                        <button className='dec' onClick={() => dispatch(DEC(item.id))} > -
                        </button >
                        <p>{item.quantity}</p>
                        <button className='dec' onClick={() => dispatch(INC(item.id)) } >+</button>
                    </div>
            </td>
            <td className='price'>
            {parseFloat((item.discountPrice).toFixed(2))} $
            </td>
            <td  className='remove' >
            <button onClick={() => dispatch(removeFromCart(item.id))} >
            <i className="fa-solid fa-xmark"></i>
            </button>
            </td>
            <div className="divider">

            </div>
         </tr>   
         
      ))}
      </tbody>
    </table>
    <div className="summary">
        <h1>Summary</h1>
        <div className="total-quantities">
            <h2>Total Products</h2>
            <p>{productQuantity}</p>
        </div>
        <div className="total-prize">
        <h2>Total Prize</h2>
        <p>{parseFloat((productPrize).toFixed(2))} $</p>
        </div>
        <p className='tax'>Shipping, taxes, and discount codes calculated at checkout</p>
        <button onClick={() => {
            alert("Add your payment method")
        }} >
            Checkout
        </button>
    </div>
       </div>

          </Container>
          
        </>
        )
   }
   
  
  
}

export default Cart;