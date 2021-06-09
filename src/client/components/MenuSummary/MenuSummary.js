import React, { useEffect, useState } from 'react'

function MenuSummary({ menuList }) {
  const menuHandler = (menuList) => {
    let allDietaries = []
    menuList.forEach((menu) => {
      allDietaries = allDietaries.concat(menu.dietaries)
    })

    const dictionary = {}
    const result = []
    allDietaries.forEach((diet) => {
      if (dictionary[diet]) {
        dictionary[diet]++
      } else {
        dictionary[diet] = 1
      }
    })
    for (const [name, count] of Object.entries(dictionary)) {
      result.push({ name, count })
    }
    return result
  }
  const [dietaries, setDietaries] = useState([])

  useEffect(() => {
    const dietMenu = menuHandler(menuList)
    setDietaries(dietMenu)
  }, [menuList.length])

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>
              {menuList.length === 1 ? '1 item' : `${menuList.length} items`}
            </span>
          </div>
          <div className="col-6 menu-summary-right menu-summary-flex">
            {dietaries.map((el) => (
              <div key={el.name}>
                {el.count}x <span className="dietary">{el.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuSummary
