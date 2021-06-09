import React from 'react'

function Item({ item, show, deleteItem }) {
  return (
    <div className="item button">
      <div>
        <h2>{item.name}</h2>
        <p>
          {item.dietaries.map((dietary, index) => (
            <span key={index} className="dietary">
              {dietary}
            </span>
          ))}
        </p>
      </div>
      <div>
        {show ? <button onClick={() => deleteItem(item)}>X</button> : null}
      </div>
    </div>
  )
}

export default Item
