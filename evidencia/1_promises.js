const axios = require('axios')

const url = "https://poetrydb.org/author"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

//Realizar la operación async
axios(config)
    
.catch((error) => {
    console.log(Error(error))
})
