import React from 'react';
import './ItemList.css';

function ItemList({items}){
    console.log(items)

    return (
        <div>{ items.length? items.map(item => (<div className="items" key={item.id}>
            <div className="item">
              <h2>{item.name}</h2>
              <p>
                  {item.dietaries.map((diet, index) => <span key={index} className="dietary">{diet}</span>)}
              </p>
            </div>
            </div>)
        ): null
}
</div>
)
}


export default ItemList;