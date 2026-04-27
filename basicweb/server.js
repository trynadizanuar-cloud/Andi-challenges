// const http = require("http")
// const fs = require("fs")
// const { url } = require("inspector")
// const port = 3000

// const index = fs.readFileSync('index.html', 'utf-8')
// const form = fs.readFileSync('form.html', 'utf-8')
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     })
//     switch (req.url) {
//         case '/':
//             res.end(index)
//             break;
//         case '/add':
//             res.end(form)
//             break;
//     }
// }).listen(port) 

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path')

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(
    path.join(__dirname, 'db', 'data.db')
);



app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    db.all("SELECT * FROM siswa", (err, data) => {
        if (err) {
            console.error(err);
            return res.send("Terjadi error");
        }
        res.render('index', { data });
    });
});
app.get('/add', (req, res) => {
    res.render('form', { item: {} })
})

app.post('/add', (req, res) => {
    db.run("INSERT INTO SISWA (nis, nama, address) VALUES (?,?,?)", [req.body.nis, req.body.nama, req.body.address], (err) => {
        if (err) return console.log(err)
    })
    res.redirect('/')
})

app.get('/delete/:nis', (req, res) => {
    db.run("DELETE FROM siswa WHERE nis=?", [req.params.nis], (err) => {
        if (err) return console.log(err)
        res.redirect('/')

    })
})

app.get('/edit/:nis', (req, res) => {
    db.get("SELECT * FROM siswa WHERE nis=? ", [req.params.nis], (err, data) => {
        if (err) {
            console.error(err);
            return res.send("Terjadi error");
        }
        res.render('form', { item: data })
    })
})

app.post('/edit/:nis', (req, res) => {
    db.run(
        "UPDATE siswa SET nis=?, nama=?, address=? WHERE nis=?",
        [req.body.nis, req.body.nama, req.body.address, req.params.nis],
        (err) => {
            if (err) return console.log(err)
            res.redirect('/')
        }
    )
})
app.listen(port, () => {
    console.log(`Web appa jalan di port ${port}`)
})
