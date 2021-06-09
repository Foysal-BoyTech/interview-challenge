import React from 'react'
import ItemsInMenu from '../Menu/ItemsInMenu'

export default function MenuPreview({ menuList, deleteItem }) {
  return (
    <div className="col-4">
      <h2 className="menu-preview">Menu preview</h2>
      <ItemsInMenu
        className="items"
        menuList={menuList}
        deleteItem={deleteItem}
      />
    </div>
  )
}
