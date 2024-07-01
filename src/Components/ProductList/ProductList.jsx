import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './productlist.css'
import React from 'react'
import {useSelector} from 'react-redux'
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



function ProductList (){
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
    const products = useSelector ((state) => state.product.products)
    return (
        <>
        <Container>
            <div className="cont-list">
               {products.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id} className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="img">
                    <img src={images[product.image]} alt="hat image"/>
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price">
                        <div className="left">
                            <p>{product.originalPrice}$ </p>
                            <span>{product.discountPercentage}% OFF</span>
                        </div>
                        <div className="right"><p>{product.discountPrice}$</p></div>
                    </div>
                    <div className="detail-list">
                        <h4>Details</h4>
                        <p className='p'>{product.description}</p>
                    </div>
                    <button>
                        Add to Cart
                    </button>
                    
                </Link>
               ))}
            </div>
        </Container>
        </>
    )
}



export default ProductList;