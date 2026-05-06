const express = require('express')
const app = express()
const db = require('./db')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


// =====================
// READ → tampil semua data
// =====================
app.get('/', function (req, res) {
    db.all('SELECT * FROM siswa', [], function (err, rows) {
        if (err) {
            console.log(err)
            return
        }

        res.render('index', { data: rows })
    })
})


// =====================
// CREATE → form tambah
// =====================
app.get('/add', function (req, res) {
    res.render('add')
})


// =====================
// CREATE → simpan data
// =====================
app.post('/add', function (req, res) {
    const name = req.body.name
    const height = req.body.height
    const weight = req.body.weight
    const birthdate = req.body.birthdate
    const married = req.body.married

    db.run(
        'INSERT INTO siswa (name, height, weight, birthdate, married) VALUES (?, ?, ?, ?, ?)',
        [name, height, weight, birthdate, Number(married)],
        function (err) {
            if (err) {
                console.log(err)
                return
            }

            res.redirect('/')
        }
    )
})


// =====================
// UPDATE → form edit
// =====================
app.get('/edit/:id', function (req, res) {
    const id = req.params.id

    db.get('SELECT * FROM siswa WHERE id = ?', [id], function (err, row) {
        if (err) {
            console.log(err)
            return
        }

        res.render('edit', { data: row })
    })
})


// =====================
// UPDATE → simpan perubahan
// =====================
app.post('/edit/:id', function (req, res) {
    const id = req.params.id

    const name = req.body.name
    const height = req.body.height
    const weight = req.body.weight
    const birthdate = req.body.birthdate
    const married = req.body.married

    db.run(
        `UPDATE siswa 
         SET name = ?, height = ?, weight = ?, birthdate = ?, married = ?
         WHERE id = ?`,
        [name, height, weight, birthdate, Number(married), id],
        function (err) {
            if (err) {
                console.log(err)
                return
            }

            res.redirect('/')
        }
    )
})


// =====================
// DELETE → hapus data
// =====================
app.get('/delete/:id', function (req, res) {
    const id = req.params.id

    db.run('DELETE FROM siswa WHERE id = ?', [id], function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/')
    })
})


// =====================
// SERVER
// =====================
app.listen(port, function () {
    console.log(`Server jalan di http://localhost:${port}`)
})