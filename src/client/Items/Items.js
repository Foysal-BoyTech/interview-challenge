import React,{ useEffect, useState } from 'react';
import ApiService from '../apiService';
import ItemList from '../ItemList/ItemList';

function Items() {

  const [items, setItems] = useState([]);
  useEffect(() => {
      console.log('Hello world')
     ApiService.getItems()
    .then(items => setItems(items.items))
  }, []);

  return (
     <div className="items">
        <ItemList items={items || []}/>
     </div>
  );
}

export default Items;
