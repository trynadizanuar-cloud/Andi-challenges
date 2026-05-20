const express = require('express')
const { Pool } = require('pg');
const app = express()
app.use(express.urlencoded({ extended: true }))
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

    db.query(
        "INSERT INTO users (name, height, weight, birth_date, is_married) VALUES ($1,$2,$3,$4,$5)",
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

app.get('/update/:id', (req, res) => {
    db.query(
        "SELECT * FROM users WHERE id=$1",
        [req.params.id],
        (err, result) => {
            if (err) return res.send('error')

            const item = result.rows[0]

            if (item.birth_date) {
                item.birth_date = item.birth_date.toISOString().split('T')[0]
            }

            res.render('add', { item })
        }
    )
})

app.post('/update/:id', (req, res) => {
    db.query(
        "UPDATE users SET name=$1, height=$2, weight=$3, birth_date=$4, is_married=$5 WHERE id=$6",
        [req.body.name, req.body.height, req.body.weight, req.body.birth_date, req.body.is_married === '1', req.params.id],
        (err) => {
            if (err) {
                console.log(err)
                return res.send('Gagal update')
            }

            res.redirect('/')
        }
    )
})


app.get('/delete/:id', (req, res) => {
    db.query("DELETE FROM users WHERE id=$1", [req.params.id], (err) => {
        if (err) return console.log(err)
        res.redirect('/')

    })
})

app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000')
})