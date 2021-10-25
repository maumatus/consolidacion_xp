const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => console.log("http://localhost:3000"));

// Indicamos a express que motor de plantillas usar
app.set("view engine", "handlebars");

// Configuramos el engine
app.engine(
    "handlebars",
    handlebars({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/partials"
    })
)

// Configuramos Bootstrap & Jquery mediante Middlewares
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery/dist/"))
app.use('/images', express.static(__dirname + "/assets/img/"))

app.get("/", (req, res) => {
    res.render("Inicio", {
        layout: "Inicio"
    })
})