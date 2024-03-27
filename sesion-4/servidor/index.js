const   http = require('http')
const PORT = 3000

const server =  http.createServer(async (request, response) => {
    response.writeHead(200, {"Content-Type": "aplication/json"})
    
    try {
        console.log("1. Obteniendo Data...")
        const responseFetch = await
        fetch("https://jsonplaceholder.typicode.com/todos")

        const json = await responseFetch.json()
        console.log("presentando Data")
        response.end(JSON.stringify(json))
        
    } catch (error) {
        console.error(error);
    }
})

server.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
