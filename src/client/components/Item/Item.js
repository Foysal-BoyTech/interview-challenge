import React from 'react';

function Item ({item, show, deleteItem}) {
//    const []

//    const deleteItem = (item) => {
//      menuList.filter(el => el != item.id)
//   }

   return (
      <div className="item">
         <h2>{item.name}</h2>
         <p>
            {item.dietaries.map((dietary, index) => <span key={index} className="dietary">{dietary}</span>)}
         </p>
         {show ? <p onClick={() => deleteItem(item)}>X</p>: null }
      </div>
)};

export default Item;