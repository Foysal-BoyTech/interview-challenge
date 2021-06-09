import React from 'react';
import Item from '../Item/Item';
import './ItemsInMenu.js';

export default function ItemsInMenu({menuList, deleteItem}) {


    return (
        <div className="menu">
            {menuList.map(item => <Item  show={true} item={item} key={item.key} menuList={menuList} deleteItem={deleteItem} />)
            }
        </div>

    )
}
