const axios = require('axios')

const url = "https://pokeapi.co/api/v2/typ"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

//Realizar la operación async
axios(config)
    .then(function(response){
    return response.data.results
}).then(function(data){
    console.log(data)
    data.forEach(function(tipo){
        console.log(`Tipo: ${tipo.name}`)
        console.log(`******************`)
    });
})
.catch(function(error){
    console.log(Error(`Error : $error`))
})