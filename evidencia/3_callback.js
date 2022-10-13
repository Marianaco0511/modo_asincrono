const request = require('request')

const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/aar-sheikhmahmoudab.json"

const r = request(url, { json:true} , function ( err , response , body ) {

    const tipos = response.body.quran
    tipos.forEach((element) => {
        console.log(`Capitulo: ${element.chapter}`)
        console.log(`*********************`)
    }
    )
})
