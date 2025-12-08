import React from 'react'

function Card() {
  return (
    <>
      <div className="card">
        <p>Title of Card</p>
        <img src="https://cards.scryfall.io/normal/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217" alt="Coiling Oracle Magic:the Gthering Card" />
        <p>Cardmarket price : 0.11</p>
        <div className="selection">
            <button>+</button>
            <input type="number" />
            <button>-</button>
        </div>
        <button>Add to cart</button>
      </div>
      
    </>
  )
}

export default Card
