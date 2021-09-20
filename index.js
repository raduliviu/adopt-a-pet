const express = require("express")
const app = express()
const port = process.env.PORT || 5000

function parameters(req, res) {
    res.json({
        kitchen: req.params.kitchen,
        dish: req.params.dish
    })
}

app.get('/', (req, res) => res.send(`
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li>Dogs</li>
        <li>Cats</li>
        <li>Rabbits</li>
    </ul>
    <h1>List of pets</h1>
`));

app.get('/cookbook/:kitchen/:dish', parameters)

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));