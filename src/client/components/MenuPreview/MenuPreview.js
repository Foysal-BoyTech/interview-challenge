import React from 'react'
import ItemsInMenu from '../Menu/ItemsInMenu'

export default function MenuPreview({menuList}) {

    return (

        <div className="col-4">
          <h2>Menu preview</h2>
          <ItemsInMenu
          className="items"
          menuList={menuList}
        />
        </div>
    )
}
