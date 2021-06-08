import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList/ItemList';
import ItemsInMenu from './Menu/ItemsInMenu';

export default () => {
  const [menuList, setMenuList] = useState([]);

  const addItemToMenu = (item) => {
    const newList = [...menuList, item];
    setMenuList(newList.map((item, key) => { item.key = key; return item }));
  }



  return (
  <div className="wrapper">
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{
              menuList.length === 1
              ? "1 item"
              : `${menuList.length} items`
            }</span>
          </div>
          <div className="col-6 menu-summary-right">
            6x <span className="dietary">ve</span>
            4x <span className="dietary">v</span>
            12x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <div className="filters">
            <input className="form-control" placeholder="Name" />
          </div>
          <ItemList addItemToMenu={addItemToMenu}/>
        </div>
        <div className="col-8">
          <h2>Menu preview</h2>
          <ItemsInMenu
          className="items"
          menuList={menuList}
        />
        </div>
      </div>
    </div>
  </div>
)};
