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

app.post('/signUp', async (req, res) => {
    const {username, password} = req.body
    if (username == '' || password == '') return res.status(400).json({error: 'Empty inputs'})

    const available = await pool.query(
        'SELECT username FROM users WHERE username = $1', [username]
    )

    if ( available.rows[0] ) return res.status(400).json({error: 'User Already Exists'})

    const inserted = await pool.query(
        'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *',
        [username, password]
    )

    console.log(inserted.rows[0])

    return res.status(201).json({message: 'Finished!'})
})

app.post('/logIn', (req, res) => {
    const {username, password} = req.body
    if (username == '' || password == '') return res.status(400).json({error: 'Empty inputs'})

    return res.status(201).json({message: 'Finished!'})
})

app.listen(3000)