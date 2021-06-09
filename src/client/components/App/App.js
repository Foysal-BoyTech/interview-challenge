import React, { useState } from 'react'
import './App.css'
import ItemList from '../ItemList/ItemList'
import ItemsInMenu from '../Menu/ItemsInMenu'
import MenuPreview from '../MenuPreview/MenuPreview'
import MenuSummary from '../MenuSummary/MenuSummary'
import Input from '../Input/Input'

export default () => {
  const [menuList, setMenuList] = useState([])
  const [dietaryList, setDietaryList] = useState([])

  const addItemToMenu = (item) => {
    const newMenuList = [...menuList, item]

    setMenuList(
      newMenuList.map((item, key) => {
        item.key = key
        return item
      }),
    )
  }
  const checkList = (item) => {
    const newId = []
    menuList.forEach((item) => {
      newId.push(item.id)
    })
    if (!newId.includes(item.id)) {
      addItemToMenu(item)
    } else {
      const newList = menuList.filter((el) => item.id !== el.id)
      setMenuList(newList)
    }
  }

  const deleteItem = (item) => {
    const newList = menuList.filter((el) => item.id != el.id)
    setMenuList(newList)
  }

  return (
    <div className="wrapper">
      <MenuSummary menuList={menuList} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <Input setMenuList={setMenuList} />
            <ItemList checkList={checkList} />
          </div>
          <MenuPreview menuList={menuList} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  )
}
