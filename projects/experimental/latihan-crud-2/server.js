const express = require('express')
const { Pool } = require('pg');
const app = express()
app.set("view engine", "ejs");
app.use(express.static("public"))


const db = new Pool({
    user: 'Andi',
    host: 'localhost',
    database: 'crud.db',
    password: '12345',
    port: 5432,
});
app.get('/', (req, res) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (err, data) => {

        if (err) {
            return res.send('error')
        }
        res.render('index', {
            users: data.rows
        })
    })
})

app.get('/create', (req, res) => {
    res.render('add', { item: {} })
})

app.post('/create', (req, res) => {

    app.post('/add', (req, res) => {
        db.query(
            "INSERT INTO users (name, height, weight, birth_date, married) VALUES ($1,$2,$3,$4,$5)",
            [req.body.name, req.body.height, req.body.weight, req.body.birth_date, req.body.married === '1'],
            (err) => {
                if (err) {
                    console.log(err)
                    return res.send("Gagal insert data")
                }
                res.redirect('/')
            }
        )
    })

})
app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000')
})