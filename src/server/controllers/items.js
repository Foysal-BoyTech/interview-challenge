const items = require('../model/items')

exports.getItems = (req, res) => {
  res.send({ items })
}

exports.getFilteredName = (req, res) => {
  const { name } = req.params
  const filteredItems = items.filter((item) => item.name.includes(name))
  res.status(200).send({ filteredItems })
}
