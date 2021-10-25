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

let itemsMenu = [
    { route: '/', title: 'Inicio', selected: false },
    { route: '/servicios', title: 'Servicios', selected: false },
    { route: '/contactenos', title: 'Contáctenos', selected: false }
]

let itemsServicios = [
    { image: 'images/Redes.png', title: 'Producción', description: 'Area de producción' },
    { image: 'images/Soporte.png', title: 'Soporte', description: 'Area de Soporte.' },
    { image: 'images/Web.png', title: 'Desarrollo', description: 'Area de Desarrollo' }
]

app.get("/", (req, res) => {
    itemsMenu = itemsMenu.map((item) => {
        if (item.route == '/') {
            item.selected = true
        } else {
            item.selected = false
        }
        return item
    })
    console.log(itemsMenu)
    res.render("Inicio", {
        layout: "Inicio",
        itemsMenu
    })
})

app.get("/servicios", (req, res) => {
    itemsMenu = itemsMenu.map((item) => {
        if (item.route == '/servicios') {
            item.selected = true
        } else {
            item.selected = false
        }
        return item
    })
    console.log(itemsMenu)
    res.render("Servicios", {
        layout: "Servicios",
        itemsMenu,
        itemsServicios
    })
})

app.get("/contactenos", (req, res) => {
    itemsMenu = itemsMenu.map((item) => {
        if (item.route == '/contactenos') {
            item.selected = true
        } else {
            item.selected = false
        }
        return item
    })
    console.log(itemsMenu)
    res.render("Contactenos", {
        layout: "Contactenos",
        itemsMenu
    })
})