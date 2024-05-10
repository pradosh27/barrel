import React from 'react'
import { LuBox } from "react-icons/lu";
import "./Footer.css"
function Footer() {
  return (
    <div className="container">
        <div className="orders">
          <div className="one">
            <LuBox className='lubox'/>
            <h2>Orders</h2>
          </div>
           <p>Find out when your purchase will arrive or schedule a delivery.</p>

        </div>
        <div className="contactus">
        <div className="one">
            <LuBox className='lubox'/>
            <h2>Orders</h2>
          </div>
           <p>Find out when your purchase will arrive or schedule a delivery.</p>
        </div>
        <div className="creditcard">
        <div className="one">
            <LuBox className='lubox'/>
            <h2>Orders</h2>
          </div>
           <p>Find out when your purchase will arrive or schedule a delivery.</p>
        </div>
        <div className="iosapp">
        <div className="one">
            <LuBox className='lubox'/>
            <h2>Orders</h2>
          </div>
           <p>Find out when your purchase will arrive or schedule a delivery.</p>
        </div>
    </div>
  )
}

export default Footer