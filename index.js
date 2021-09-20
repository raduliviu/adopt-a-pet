const express = require("express")
const pets = require("./pets")
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send(`
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
`));

app.get('/animals/:pet_type', (req, res) => {
    let petItem = ""
    pets[req.params.pet_type].forEach(pet => petItem += `<li><a href="/animals/${req.params.pet_type}/${pets[req.params.pet_type].indexOf(pet)}">${pet.name}</a></li>`)
    return res.send(`
        <h1>List of ${req.params.pet_type}</h1>
        <ul>${petItem}</ul>
`)})

app.get('/animals/:pet_type/:pet_id', (req, res) => {
    let pet = pets[req.params.pet_type][req.params.pet_id]
    return res.send(`
        <h1>${pet.name}</h1>
        <p>Age: ${pet.age}</p>
        <p>Breed: ${pet.breed}</p>
        <p>${pet.description}</p>
        <img src="${pet.url}" alt="">
    `)}
)

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));