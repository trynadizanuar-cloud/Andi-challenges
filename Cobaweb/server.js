const http = require('http')
const path = require('path')
const fs = require('fs')
const { URLSearchParams } = require('url')

const port = 3000
const dbpath = path.join(__dirname, 'db', 'data.db')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(dbpath)

// Load file
const index = fs.readFileSync('./view/index.html', 'utf-8')
const form = fs.readFileSync('./view/form.html', 'utf-8')
const style = fs.readFileSync('./public/stylesheets/style.css', 'utf-8')

http.createServer((req, res) => {

  // ================= CSS =================
  if (req.url === '/style') {
    res.writeHead(200, { 'Content-Type': 'text/css' })
    return res.end(style)
  }

  // ================= HOME =================
  if (req.url === '/') {
    db.all('SELECT * FROM siswa', (err, data) => {
      if (err) return console.log(err)

      let html = ''

      data.forEach((row, index) => {
        html += `
          <tr>
            <td style="text-align:center">${index + 1}</td>
            <td>${row.nis}</td>
            <td>${row.nama}</td>
            <td>${row.umur}</td>
            <td>
              <a class="btn-red" href="/delete?id=${row.nis}" onclick="return confirm('Yakin hapus data ini?')">Delete</a>
              <a class="btn-blue" href="/update?id=${row.nis}">Update</a>
            </td>
          </tr>
        `
      })

      const Page = index.replace('{{content}}', html)

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(Page)
    })

    return
  }

  // ================= ADD =================
  if (req.url === '/add') {

    // ===== POST (simpan data) =====
    if (req.method === 'POST') {
      let body = ''

      req.on('data', chunk => {
        body += chunk
      })

      req.on('end', () => {
        const params = new URLSearchParams(body)

        const nis = params.get('nis')
        const nama = params.get('nama')
        const umur = params.get('umur')

        db.run(
          'INSERT INTO siswa (nis, nama, umur) VALUES (?,?,?)',
          [nis, nama, umur],
          err => {
            if (err) return console.log(err)

            res.writeHead(302, { Location: '/' })
            res.end()
          }
        )
      })

      return
    }

    // ===== GET (tampil form kosong) =====
    const Page = form
      .replace('{{nis}}', '')
      .replace('{{nama}}', '')
      .replace('{{umur}}', '')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end(Page)
  }

  // ================= DELETE =================
  if (req.url.startsWith('/delete')) {

    const params = new URLSearchParams(req.url.slice(7))
    const id = params.get('id')

    db.run('DELETE FROM siswa WHERE nis=?', [id], err => {
      if (err) return console.log(err)

      res.writeHead(302, { Location: '/' })
      res.end()
    })

    return
  }

  // ================= UPDATE (FORM) =================
  if (req.url.startsWith('/update')) {

    const params = new URLSearchParams(req.url.slice(7))
    const id = params.get('id')

    db.get('SELECT * FROM siswa WHERE nis=?', [id], (err, item) => {
      if (err) return console.log(err)

      if (!item) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end('<h1>Data tidak ditemukan</h1>')
      }

      const Page = form
        .replace('{{nis}}', item.nis)
        .replace('{{nama}}', item.nama)
        .replace('{{umur}}', item.umur)

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(Page)
    })

    return
  }

  // ================= NOT FOUND =================
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end('<h1>Page Not Found</h1>')

}).listen(port)

console.log(`Server jalan di http://localhost:${port}`)