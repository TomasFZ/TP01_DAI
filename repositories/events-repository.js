import pg from "pg";
import ( DBConfig ) from "./db.js";
const { Client } = require('pg');
const client = new pg.Client(DbConfig);


client.connect();

const traerTodosLosEventos = "select * from events inner join event_categories on "; //hacer inner join de event categories, enrollments, locations, tags, 
client.query(sql);

const request = wait client.query(sql);



//https://tembo.io/docs/getting-started/postgres_guides/connecting-to-postgres-with-nodejs