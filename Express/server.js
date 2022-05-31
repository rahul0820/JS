const express = require('express')
const app = express()

// app.get('/' , (req, res) => {
//     console.log('Here')
//     res.send('Hi')
// })
// app.listen(3000)



// ------------------------------------------- Sending Data-------------------------------------------
//Sending status code


// app.get('/' , (req, res) => {
//     console.log('Here')
//     res.sendStatus(500)
// })
// app.listen(3000)


// Sending status code with Message

app.get('/' , (req, res) => {
    console.log('Here')
    res.status(500).send('Hello, there is an error, Please inspect and check the error')
})
app.listen(3000)