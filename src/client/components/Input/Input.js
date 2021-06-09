import React, { useState } from 'react'
import getItemsByName from '../../apiService'

function Input({ setMenuList }) {
  const [name, setNames] = useState('')

  const handleClick = () => {
    getItemsByName(name).then((res) => {
      setMenuList(res)
    })
  }

  return (
    <div className="filters">
      <input
        className="form-control"
        placeholder="Name"
        onChange={(e) => setNames(e)}
        onClick={handleClick}
      />
    </div>
  )
}

export default Input
