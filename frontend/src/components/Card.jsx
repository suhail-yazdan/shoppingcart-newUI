import React, { useState } from 'react'
import Counter from './Counter'
import "../styles/cardStyles.css"

const Card = (props) => {
  const [cardSelected, setCardSelected] = useState(false)
  
  // const getCardClass = () => {
  //   let cardClass = cardSelected === true ? "card selected" : "card deselected";
  //   return cardClass
  // }

  // const getOverlayState = () => {
  //   let overlayClass = cardSelected === true ? "overlay show" : "overlay hide";
  //   return overlayClass;
  // };

  return (
    <div className="cardSection">    
    {/* {getCardClass()} onClick={() => setCardSelected(!cardSelected)} */}
    <div className='cardImage'>
      <img src={props.productDetail.src} alt="" width={"180px"}/>
    </div>
    <div className='cardContent'>
      <h2> {props.productDetail.name} </h2>
      <h3>Rs. {props.productDetail.price}</h3>
      <div className='subContentWrapper'>
        <div className='productDetails'>
          <ul>
            <li>Flavour : {props.productDetail.flavour}</li>
            <li>Weight : {props.productDetail.weight}</li>
            <li>Size : {props.productDetail.size}</li>
            <li>Country of Origin : India</li>
          </ul>
        </div>
        <div className="overlay show">
        <Counter 
          product = {props.productDetail}
          onIncrement={props.onQuantityIncreased}
          onDecrement={props.onQuantityDecreased} 
          />
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Card
