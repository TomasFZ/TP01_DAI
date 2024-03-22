import pg from "pg";
class EventService{
    getAllEvents(pageSize, reqPage){
        const query = "select * from events limit $(pageSize) offset $(reqPage) inner join categories on events.id_event_category = event_categories.id inner join "  //continuar haciendo los inner join de localizacion, usuario creador, etc.   //ver si en realidad tiene que ser la query en events-repository.js           //en realidad es pg. y el query pero por ahora a hardcodear
        const query2 = ""
        const listaDB = query.execute();
        return {
            "collection": listaDB,
            "pagination": {
            "limit": pageSize,
            "offset": reqPage,
            "nextPage": reqPage + 1, //poner el http
            "total": "1"
            }
        }
    }

    getEventFiltros(pageSize, reqPage, nombre, categoria, fecha, tag){//tal vez se puede hacer un vector que contenga estos parametros y vaya buscando uno por uno en un ciclo. 

        const query = pg. //tiene que ser UN solo evento especifico en base a los filtros
        const eventoBuscado = query.execute(); 
        if(nombre = undefined){

        }
        return {
            "collection": 
        }

    }

    getEventDetails(pageSize, reqPage, localizacionEvento, idEvento, nombreEvento, descripcionEvento, fechaInicioEvento, duracionEvento, precioEvento, enrollmentDisponible, asistenciaMax){
        const query = ""
        const detallesEventos = query.execute(); 

    }

    getAllParticipants(pageSize, reqPage, nombre, apellido, username, asistencia, rating){

    }


}