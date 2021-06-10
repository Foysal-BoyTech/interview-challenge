const router = require('express').Router()
const Items = require('./controllers/items')

router.get('/api/items', Items.getItems)

router.get('/api/items/:name', Items.getFilteredName)

// get with params or query params/ or a post with json, then parse json / app.get('/api/items/', (req, res) => res.send({ items.filter(el => el.name.includes(substring from input)) }));
module.exports = router
