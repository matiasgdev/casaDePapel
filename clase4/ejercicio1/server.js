let expres = require('express')

let app = expres()

const PORT = parseInt(process.argv[2])

app.get('/', (req, res) => {
    res.status(200).send('Hola desde el puerto ' + PORT)
})

app.listen(PORT, () => {})
