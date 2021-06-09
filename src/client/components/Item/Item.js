import React from 'react';

function Item ({item, show}) {

   return (
      <div className="item">
         <h2>{item.name}</h2>
         <p>
            {item.dietaries.map((dietary, index) => <span key={index} className="dietary">{dietary}</span>)}
         </p>
         {show ? <p>X</p>: null }
      </div>
)};

export default Item;