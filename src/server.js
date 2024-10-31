const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '../public')));

// middleware - tarpine funkcija pries apdorojant uzklausas
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.get("/api/categories", (req, res) => {
    res.json(
        [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Fashion" },
        { id: 3, name: "Home & Garden" },
        { id: 4, name: "Sports & Outdoors" },
        { id: 5, name: "Toys & Games" }
        ]
    )
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
