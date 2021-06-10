import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import ApiService from '../../apiService'
import './ItemList.css'

function ItemList({ checkList, items }) {
  return (
    <div className="itemList">
      {items.length
        ? items.map((item) => (
            <div key={item.id} onClick={() => checkList(item)}>
              <Item item={item} key={item.id} />
            </div>
          ))
        : null}
    </div>
  )
}

export default ItemList
