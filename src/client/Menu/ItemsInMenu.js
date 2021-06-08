import React from 'react';
import Item from '../Item/Item';

export default function ItemsInMenu({menuList}) {

    return (
        <div className="menu">
            {menuList.map(item => <Item item={item} key={item.key}/>)
            }
        </div>

    )
}
