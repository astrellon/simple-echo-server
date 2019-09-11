const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

// Setup JSON parsing for the express app.
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded

// Handling URL routing
app.get('/:text', (req, res) =>
{
    const text = req.params.text
    res.send(`You said ${text}`)
})

app.post('/echo', (req, res) =>
{
    const text = req.body.text
    console.log(`Echoing JSON text ${text}`)

    res.json({ echo: text })
})

// Start server
app.listen(port, () => console.log(`Echo Server on port ${port}!`))

