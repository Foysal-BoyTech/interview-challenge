import React from 'react';

function Item ({item}) {
   return (
      <div className="item">
         <h2>{item.name}</h2>
         <p>
            {item.dietaries.map((dietary, index) => <span key={index} className="dietary">{dietary}</span>)}
         </p>
      </div>
)};

export default Item;