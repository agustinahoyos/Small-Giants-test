const express = require("express");
const cors = require("cors");
const app = express();
const axios = require('axios');


app.use(cors());

 const port = process.env.PORT || 8080;

 app.get("/",(req, res) => {
  res.send("Search for a product on this URL: /api/search/nameoftheproductinsspanish")
}) 

app.get("/api/search/:palabrabuscada",(req, res) => {
  var searchedProduct = req.params.palabrabuscada;
   axios.get('https://api.mercadolibre.com/sites/MLA/search', {
      params: {
        q: searchedProduct
      }
   }).then(response => {  
     res.json(response.data)
    }).catch(error => {
      console.log(error)
   })
})

 app.listen(port, () => {
   console.log(`Server listening on: ${port}`)
 })