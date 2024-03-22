import express from "express";

import controller from "./src/controller.js";

const app = express(); 

app.use(express.json());

const port = 3000;

app.use("/controller", controller);

app.listen(port, () => {
    console.log("server anda")
})

