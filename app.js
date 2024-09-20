const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('./navbar-app'))


app.post('/login', (req, res) => {
    const {name} = req.body
    if(name){
        res.status(200).send(`welcome ${name}`)
    }
    res.status(404).send(`Please enter a name`)
})

app.get('/index', (req, res) => {
    res.send(`Welcome to the regular`)
})

app.listen(5000, ()=>{
    console.log('listening on port on port 5000')
})