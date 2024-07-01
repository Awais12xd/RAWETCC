import React, { useState } from "react";
import "./footer.css";
import {useNavigate} from 'react-router-dom'

function Footer() {
    
const navigate= useNavigate()
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
const [arrow,setArrow] = useState(">");
const [Msg ,setMsg] = useState("")
const msg = () => {
    alert("Thanks for Subscribing")
    setMsg("")
}
  return (
    <>
      <div className="footer-cont">
        <div className="footer-width">
          <div className="box-1 box">
            <div className="box-1-1">
              BLOGIFY<span>.</span>
            </div>
            <div className="box-1-2">
              A108 Adam Street New York,NY 5723654 United States
            </div>
            <div className="box-1-3">
              <span>Phone:</span>+8 9837 889374 <br />
              <span>Email:</span>Info@Example.com
            </div>
          </div>
          <div className="box box-2">
            <div className="box-2-1">
                Useful Links
            </div>
            <div className="box-2-2">
                <ul>
                {
              navItems.map((item) => (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                >
               <span>{arrow}</span>{item.name}
                </button>
              </li>
              ))
            }
                </ul>
            </div>
          </div>
        
          <div className="box box-4">
            <div className="box-4-1">
                Subscribe Here
            </div>
            <div className="box-4-2">
                <input onChange={(e) => setMsg(e.target.value)} value={Msg} type="Email" placeholder="Your Email...." />
                <button onClick={msg}>
                    Subscribe
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
