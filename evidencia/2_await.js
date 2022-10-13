const axios = require('axios')

const url = "https://api.generadordni.es/v2/vehicle/vin"

//Configuración de request
let config = {
    url : url,
    method: 'get'
}

   
const f = async() =>{
    try{
        let response = await axios(config)
         const tipos = response.data
         tipos.forEach((data) => {
            console.log(`Codigo: ${data}`)
            console.log(`.....................`)
         });
    }catch(error){
        console.log(Error(error))
    }  
}

f()