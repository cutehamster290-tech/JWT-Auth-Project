require('dotenv').config()
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Pool } = require('pg')
const app = express()
app.use(express.json())
app.use(cors())

const pool = new Pool({ connectionString: process.env.CONNECTION_STRING })

app.post('/signUp', (req, res) => {
    const {username, password} = req.body
    if (username == '' || password == '') return


})

app.post('/logIn', (req, res) => {
    const {username, password} = req.body
    if (username == '' || password == '') return

    
})

app.listen(3000)