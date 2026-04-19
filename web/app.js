const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const dataPath = path.join(__dirname, "data.json");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// helper baca file
function readData() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

// helper tulis file
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// READ (Homepage)
app.get("/", (req, res) => {
  const data = readData();
  res.render("index", { data });
});

// CREATE FORM
app.get("/add", (req, res) => {
  res.render("add");
});

// CREATE PROCESS
app.post("/add", (req, res) => {
  const data = readData();

  const newUser = {
    name: req.body.name,
    height: parseInt(req.body.height),
    weight: parseFloat(req.body.weight),
    birthdate: req.body.birthdate,
    married: req.body.married === "true"
  };

  data.push(newUser);
  writeData(data);

  res.redirect("/");
});

// UPDATE FORM
app.get("/edit/:index", (req, res) => {
  const data = readData();
  const user = data[req.params.index];
  res.render("edit", { user, index: req.params.index });
});

// UPDATE PROCESS
app.post("/edit/:index", (req, res) => {
  const data = readData();
  const index = req.params.index;

  data[index] = {
    name: req.body.name,
    height: parseInt(req.body.height),
    weight: parseFloat(req.body.weight),
    birthdate: req.body.birthdate,
    married: req.body.married === "true"
  };

  writeData(data);
  res.redirect("/");
});

// DELETE
app.get("/delete/:index", (req, res) => {
  const data = readData();
  data.splice(req.params.index, 1);
  writeData(data);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});