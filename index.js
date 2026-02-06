import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import footprintApi from './footprintApi.js'

const app = express()
app.use(bodyParser.json())

app.get('/', async (req, res) => {    
  const countries = await footprintApi.getCountries()
  const country = await footprintApi.getDataForCountry(229)

  res.send(`
    <center>
      <h1>Bienvenido a Equilibri!</h1>
      <div style="display: flex; flex-direction: row;">
        <div style="width: 50%; margin-right: 20px;">    
          <h3>Ejemplo de obtención de países en formato JSON (primeros 5 resultados)</h3> 
          <pre style="  
            text-align: left;
            background: #f8f8f8;
            border: 1px solid #efefef;
            border-radius: 6px;
            padding: 2em;"
          >${JSON.stringify(countries?.slice(0, 5), null, 2)}</pre>
        </div>
        <div style="width: 50%;">    
          <h3>Ejemplo de datos de un país en formato JSON (primeros 5 años)</h3>
          <pre style="  
            text-align: left;
            background: #f8f8f8;
            border: 1px solid #efefef;
            border-radius: 6px;
            padding: 2em;"
          >${JSON.stringify(country?.slice(0, 5), null, 2)}</pre>
        </div>
      </div>
    </center>    
  `)


  console.log('showing first 5 countries:')
  console.log(countries.slice(0, 5))
  console.log('showing first 5 years of a country:')
  console.log(country.slice(0, 5))
})

app.listen(5000,() => {     
  console.log('app is listening on port 5000')
})