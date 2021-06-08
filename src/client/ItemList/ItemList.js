import React,{ useEffect, useState } from 'react';
import Item from '../Item/Item'
import ApiService from '../apiService';
import './ItemList.css';

function ItemList({addItemToMenu}){
  const [items, setItems] = useState([]);
  useEffect(() => {
     ApiService.getItems()
    .then(items => setItems(items.items))
  }, []);
    return (
      <div>
        {
          items.length
          ? items.map(item => (
            <div key={item.id} onClick={() => addItemToMenu(item)}>
              <Item  item={item} key={item.id}/>
            </div>
          ))
          : null
          }
      </div>
    )
}

export default ItemList;