import React from 'react'
import './memoCard.css'

const MemoCard = ({mini,getAllCars}) => {

  console.log('mini',mini)
  return (
    <div>
    <br/>
    <div className="container">
    <img src={mini.image}/>
  <div className="wrapper">
    <div className="banner-image"> 
    <h1 className='location'>{mini.Model}</h1>
  <div className="button-wrapper">
    <button className="btn outline">DETAILS</button>
    <button className="btn fill">RENT NOW</button>
  </div>
  </div>
</div>
</div>
<br/>


    
    </div>
    
  )
}

export default MemoCard