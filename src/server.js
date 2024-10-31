const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '../public')));

// masyvas su kategorijomis
const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Garden" },
    { id: 4, name: "Sports & Outdoors" },
    { id: 5, name: "Toys & Games" }
];

// middleware - tarpine funkcija pries apdorojant uzklausas
app.use((req, res, next) => {
    console.log('hello from middleware 1');
    next();
});

app.use((req, res, next) => {
    // Middleware to log the request method and path
    console.log('hello from middleware 2');
    next();
});

// GET uzklausa - gauti visas kategorijas
app.get("/api/categories", (req, res) => {
    res.json(categories);
});

// POST uzklausa - sukurti nauja kategorija
app.post("/api/categories", (req, res) => {

    // logika, pridedam nauja kategorija i masyva
    categories.push({
        id: categories.length + 1,
        name: 'Category ' + (categories.length + 1)
    });
    
    // atsakymas klientui
    res.json({
        success: true,
        message: 'Category created successfully',
        category: categories[categories.length - 1]
    });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
