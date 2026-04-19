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

let data = [
    {
        nis: "001",
        nama: "Andi",
        address: "Bandung"
    },
    {
        nis: "002",
        nama: "Dzikri",
        address: "Kupang"
    }
]

app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { data })
})

app.get('/add', (req, res) => {
    res.render('form', { item: {} })
})

app.post('/add', (req, res) => {
    data.push(req.body)
    res.redirect('/')
})

app.get('/delete/:nis', (req, res) => {
    data = data.filter(item => item.nis !== req.params.nis)
    res.redirect('/')
})

app.get('/edit/:nis', (req, res) => {
    items = data.filter(item => item.nis == req.params.nis)
    res.render('form', { item: items[0] })
})

app.post('/edit/:nis', (req, res) => {
    data = data.map(item => {
        if (item.nis == req.params.nis) {
            item.nama = req.body.nama,
                item.address = req.body.address
        }
        return item
    })
    res.redirect('/')
})
app.listen(port, () => {
    console.log(`Web appa jalan di port ${port}`)
})
