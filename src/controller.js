import express from "express";

const controller = express.Router(); //hacer gitignore para el module

const EventService = new EventService();

//listado de Eventos
controller.get("/event", (req, res) => { //chequear que los nombres esten bien
    const limit = req.query.limit;
    const offset = req.query.offset; 
    var allEvents = new Object();
    return res.send( allEvents = EventService.getAllEvents(limit, offset))
    console.log(allEvents);
})

//busqueda de un evento
controller.get("/event/:nombre, fecha, categoria, tag", (req, res) => {
    var eventoBuscado = new Object();
    return res.status(201).send(
    {
        "id": body.id, 
        "nombre": body.nombre, 
        "fecha": body.fecha, 
        "categoria": body.categoria,
        "tags": body.tags

        eventoBuscado = EventService.getEventFiltros(limit, offset);
    }
    )
})

controller.get("/event:nombre")



controller.get("/participants", (req, res) => {


})