import React, { useState , useEffect } from "react";
import './navbar.css'
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    const [isFixed, setIsFixed] = useState("");
    const [bar, setBar] = useState("");
    const [yes, setYes] = useState(true);

    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setIsFixed("fixed");
            } else {
                setIsFixed("");
            }


        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

     

    const navItems = [
        {
            name:"Home",
            slug:"/"
        },
        {
            name:"Shop",
            slug:"/shop"
        },
        {
            name:"Reviews",
            slug:"/reviews"
        },
        {
            name:"Contact",
            slug:"/contact"
        },
        {
            name:"About us",
            slug:"/about"
        },
    ]
  
    const toggle = () => {
        if (yes) {
            setBar("bar")
            setYes(false)
        }else{
            setBar("")
            setYes(true)
        }
    }
    return(
        <>
       
        <nav className={`${isFixed}`}>
         <div className="left">
            <Link style={{textDecoration:"none",color:"inherit"}} to="/"><h1>RAW<span>ETC</span></h1></Link>
         </div>
         <div className="right">
            <Link to="/cart" className="a"><i className="fa-solid fa-cart-shopping"><span>{totalQuantity}</span></i></Link>
           <div className={`menu ${bar}`}>
           <ul >
                {navItems.map((item) => (
                    <li key={item.name}>
                       <Link to={item.slug}>{item.name}</Link>
                    </li>
                ))}
            </ul>
           </div>
            <button onClick={toggle}>
            <i className="fa-solid fa-bars"></i>
            </button>
         </div>
        </nav>
      
        </>
    )
}


export default Navbar;