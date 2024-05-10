import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Home.css'
import { IoStarSharp } from "react-icons/io5";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({handleClick}) {
    const [furniture ,setFurniture] =useState([])
    async function fetchFurniture(){
        await fetch("http://localhost:3000/api/v1/furniture")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.furniture)
            setFurniture(data.furniture)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        fetchFurniture();
    }, [])
    
  return (<>
    <div>
        <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OutdoorPromo?bfc=on&wid=1440&qlt=80&op_sharpen=1" alt="error" className='fullImg'/>
    </div>
    <div className='homecard'>
    {
        furniture.map((data)=>(
            <Card key={data.id} data={data} handleClick={handleClick}/>
        ))
    }
    </div>
    <div className="secondone">
        <h2 style={{textAlign : "center" , background : "white"}}>complete your outdoor retreat ...</h2>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240402_OtdrPlanters?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="First slide"
          loading='lazy'
        /><img
        className="tales"
        src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240424_OutdoorCollections?wid=896&amp;qlt=80&amp;op_sharpen=1"
        alt="Second slide"
        loading='lazy'
      /><img
      className="tales"
      src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240402_OtdrLonge?wid=896&amp;qlt=80&amp;op_sharpen=1"
      alt="Third slide"
      loading='lazy'
    />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240424_OutdoorCollections?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Second slide"
          loading='lazy'
        />
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240424_OutdoorCollections?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Second slide"
          loading='lazy'
        />
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240424_OutdoorCollections?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Second slide"
          loading='lazy'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240402_OtdrLonge?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Third slide"
        />
        <img
        className="tales"
        src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OtdrDining?wid=896&amp;qlt=80&amp;op_sharpen=1"
        alt="Fourth slide"
        loading='lazy'
      />
        <img
        className="tales"
        src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OtdrDining?wid=896&amp;qlt=80&amp;op_sharpen=1"
        alt="Fourth slide"
        loading='lazy'
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OtdrDining?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Fourth slide"
        />
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OtdrDining?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Fourth slide"
        />
        <img
          className="tales"
          src="https://cb.scene7.com/is/image/Crate/cb_dHP_20240501_OtdrDining?wid=896&amp;qlt=80&amp;op_sharpen=1"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='thirdone'>
        <h2>Upto <span>30% off </span></h2> <h2> the Spring Refresh</h2>
        <button>Shop Now</button>
        <h1>
            <span class="text_1">Save on best selling sofas, rugs</span>
            <span class="text_2">tables, storage and more.</span>
        </h1>
    </div>
    <div className="fifthone">
        <div className="first">
            <h2><span>20% off </span>select Brevile Espresso Machines<sup>R</sup></h2>
            <button>Espresso Machines Ship Free</button>
        </div>
        <div className="second">
            <h2>upto <span>$120 off</span> select KitchenAid <sup>R</sup></h2> <h2>Stand Mixtures</h2>
            <button>Stand Mixtures Ship Free</button>
            <h1>
                <span class="text_1">Choose from <span style={{color : "red"}}>20</span> colors, including</span>
                <span class="text_2">our exclusive Steel Blue</span>
            </h1>
        </div>
    </div>
    <div className="sixthone">
        <h2>furniture build for forever</h2>
        <button>Shop Collections</button>
        <h1>
            <span class="text_1">Gather's plush cushions</span>
            <span class="text_2"> Available in <span style={{color : "red"}}>200</span> + fabrics</span>
        </h1>
    </div>
    <div className="video-container">
        <video autoPlay muted loop>
            <source src='https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20240328_DesignDeskV2.mp4'/>
        </video>
        <div className="caption">
            <h2 className='caption1'>The Design Desk</h2>
            <h2 className='caption2'>imagine the possibilities <br />with free design help</h2>
            <button>Book Your Appointment Now</button>
            
        </div>
    </div>
    <div className="seventhone">
        <h2>a natural gathering place</h2>
        <button>Shop Dining Tables</button>
        <button>Shop Dining Chairs</button>
        <h1>
                <span class="text_1">New! for just <span style={{color : "red"}}>349</span>,Lavsen deliver</span>
                <span class="text_2"> Danish modern simplicity</span>
         </h1>
    </div>
    <div className="eightone">
        <h2>stunning from every angle</h2>
        <button>Shop DinnerWare Collections</button>
        <h1>
                <span class="text_1">Set the entire table with <span style={{color: "red"}}>Tour's</span></span>
                <span class="text_2">iconic glassware and floatware</span>
         </h1>
    </div>
    <div className="ninthone">
        <h2>Upto <span>35% off</span> the <br />spring Kitchen event</h2>
        <button>Shop Now</button>
        <h1>
            <span class="text_1">Save on<span style={{color: "red"}}> Le Creuset's</span></span>
            <span class="text_2">Breville's,KitchenAid's & more</span>
         </h1>
    </div>
    <div className="tenthone">
        <h2>designed with purpose</h2>
        <button>Shop Now</button>
        <h1>
            <span class="text_1">Anneli' cozy curves supported</span>
            <span class="text_2">by quality certified wood frame</span>
         </h1>
    </div>
    <div className="eleventhone">
        <h2 className='shipsfree'>SHIPS FREE</h2>
        <h2 className='simple'>layers of soft, natural luxury</h2>
        <button>Shop Now</button>
    </div>
    <div className="twelvethone">
        <h2>the one that <br /> changes everything</h2>
        <button>Shop Lighting</button>
        <h1>
            <span class="text_1">The <span style={{color : "red"}}>light</span> they emit is beautiful</span>
            <span class="text_2">and cratsmanship is perfection</span>
        </h1>
        <div className="iconic">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <h4>NOSSA WOVEN PENDENT</h4>
        </div>
    </div>

    </>
  )
}

export default Home