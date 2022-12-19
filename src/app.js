const express = require("express");
const app = express()
require("../src/db/connection");
const regdata = require("../src/models/regdata")
const port = process.env.PORT || 8000
app.use(express.json())
var cors = require('cors');
app.use(cors())

app.post("/registrationData", async (req, res) => {
    try {
        const user = new regdata(req.body)
        const createRegistration = await user.save()
        res.status(201).send(createRegistration);
    } catch (error) {
        res.status(400).send(error)
    }
})

// app.get("/registrationData/:id", async (req, res) => {
//     try {
//         const _id=req.params.id
//     } catch (error) {

//     }
// })

// app.patch("/registrationData/:id", async (req, res) => {
//     try {
//         const _id = req.params.id
//         const updatedRegistrationData = await regdata.findByIdAndUpdate({ _id: _id })
//         res.send(updatedRegistrationData)
//         console.log(updatedRegistrationData);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


app.get("/registrationData", async (req, res) => {
    const registration = await regdata.find()
    res.send(registration)
})

app.listen(port)