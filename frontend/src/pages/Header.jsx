import React, { useEffect, useState } from 'react'
import './Header.scss'
import {useAuth0} from "@auth0/auth0-react"
import {Link} from  "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";


function Header({setShow,size}) {
  const [position , setPosition] = useState({lattitude : null , longitude : null});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, [])
  
  const {user , isAuthenticated , loginWithRedirect , logout} = useAuth0();
  return (
    <>
    <div className='first' onClick={setShow(true)}>
      <input type="text" placeholder='What can we help you find' onChange={(e)=>e.target.value()}></input>
      <CiSearch className='reacticon' />
      <h1 className='heading' onClick={()=>setShow(true)}>Barrel</h1>
      <div className="logos">
        <div className="dropdown">
          <span><FaUser className='logo'/></span>
          <div className="dropdown-content">
            {
              isAuthenticated ? (<><p>Hi ! {user.nickname}</p><button style={{background : "black" , color : "white" , padding : 10 , width : 100}} onClick={(e)=>logout({logoutParams : {returnTo : window.location.origin}})}>Logout</button></>) : (<><button style={{background : "black" , color : "white" , padding : 10 , width : 100}} onClick={(e)=>loginWithRedirect()}>Login</button><p style={{marginTop : 10}}>Please SignIn!</p></>)
            }
          </div>
        </div>
        <div className="dropdown">
          <span><FaLocationDot className='logo'/></span>
          <div className="dropdown-content">
          {
          isAuthenticated && position.latitude && position.longitude ? (
            <p>
              Latitude: {position.latitude}, Longitude: {position.longitude}
            </p>
          ) : (
            <p>Loading...</p>
          )
          }
          </div>
        </div>
        <div className="dropdown">
          <span><FaHeart className='logo'/></span>
          <div className="dropdown-content">
            {
              isAuthenticated ? (<button className='wishlist' style={{background : "black" , color : "white" , padding : 10 , width : 100}}>WishList</button>) : (<p style={{}}>Please SignIn for adding wishlist</p>)
            }
          </div>
        </div>
        <div className="dropdown">
          {isAuthenticated ? (<>

            <FaCartShopping className='logo'/>
            <p style={{position : "relative" , bottom : 30}}>{size}</p>
          </>):("")
          }
        </div>
      </div>
      <ul>
        <li><Link to="#">NEW!</Link></li>
        <li><Link to="#">WEDDING REGISTRY</Link></li>
        <li><Link to="#">FREE DESIGN SERVICES</Link></li>
        <li><Link to="#">TRADE PROGRAM</Link></li>
        <li><Link to="#">COLLABORATIONS</Link></li>
        <li><Link to="#">MOTHER'S DAY</Link></li>
      </ul>
    </div>
    <div className='second'></div>
    <div className='third'></div>
    <div className='fourth'></div>
    <div className='fifth'></div>
    </>
  )
}

export default Header