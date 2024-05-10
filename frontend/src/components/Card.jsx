import React from 'react'
import './Card.scss'
function Card({data , handleClick}) {
    const {name , description , currency , price , img_link} = data
  return (<>
  <div className="body">
    <div class="card-hover">
    <img src={img_link} alt="error" />
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        {name}
      </h3>
      <p class="card-hover__text">{description}<br/><b style={{color : "black" , fontSize : 20}}>{currency} {price}</b></p>
      <a href="#" class="card-hover__link">
        <span><button className='addtocart' onClick={()=>handleClick(data)}>Add To Cart</button></span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Get upto <span>40%</span> discount!</h4>
    </div>
  </div>
      
  </div>
  </>
  );
};
export default Card