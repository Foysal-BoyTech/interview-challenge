import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import apiService from '../../apiService'

function Input({ setItems }) {
  const [name, setNames] = useState('')

  useEffect(() => {
    console.log(name)
    if (name.length) searchByName()
  }, [name])

  const searchByName = debounce(() => {
    apiService.getItemsByName(name).then((res) => {
      console.log(res)
      setItems(res)
    })
  }, 400)

  return (
    <div className="filters">
      <input
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setNames(e.target.value)}
        // onClick={handleClick}
      />
    </div>
  )
}

export default Input
