const express = require('express');
const items = require('./items');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use(cors())
app.get('/api/items', (req, res) => res.send({ items }));
app.get('api/items/:name', (req, res) => {
    const { name } = req.params
    const filteredItems = items.filter(item => item.name.includes(name))
    res.status(200).send({filteredItems})
    console.log(req.method)
}
)

// get with params or query params/ or a post with json, then parse json / app.get('/api/items/', (req, res) => res.send({ items.filter(el => el.name.includes(substring from input)) }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
