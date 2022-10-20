const axios = require('axios')

const url = "https://poetrydb.org/author"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

//Realizar la operación async

axios(config)
    .then(function(response){
    return response.data.authors
}).then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(Error($error))
})