import React from 'react'
import ratings from '../../assets/data.json'
import './Rating.css'
const Rating = () => {

  return (<div className='rate'>
    <div className='cards'>
            {ratings.map((rating,index)=>(
                <div className='card ' key={index}>
                    <div className='card-img'><img src={rating.imgSrc} alt="" /></div>
                    <div className='card-name'><span>{rating.name}</span></div>
                    <div className='card-com'><p>{rating.comment}</p></div>
                </div>
            ))}      
      
    </div>
    </div>
  )
}

export default Rating
