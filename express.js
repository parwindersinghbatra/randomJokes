const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

URL_API=    'https://api.api-ninjas.com/v1/jokes?limit=1'
API_KEY=    'g2XiD6MzNNOB+eZcvKAyHw==CD0DbzFPaaKwZ3bR'
PORT=3200

app.get("/api/jokes/random", async (req, res) => {
    try{
        const response = await axios.get(URL_API,{
            headers: {
                'X-Api-Key': API_KEY
              },
        })
        console.log("Response ",response.data)
        res.json(response.data)
        
    }
    catch(err){
        console.error("Error while fetching jokes",err);
    }
        
})


// accessKey = "Fr8xXLxcigCX0TU2BahapQWCUWfmLGEEjePs5oY1ow4";

// imageURL = "https://api.unsplash.com/photos/random?client_id=" + accessKey;

Image_URL = "https://api.unsplash.com/photos/random?client_id=Fr8xXLxcigCX0TU2BahapQWCUWfmLGEEjePs5oY1ow4"

app.get("/api/images/random", async (req, res) => {
    try{
        const response = await axios.get(Image_URL);
            console.log("Response ", response.data);
        res.json(response.data);
        }  
        catch(err){
            console.error("Error while fetching jokes",err);
        }
    }
)

app.listen(PORT, ()=> console.log('Express Server is running on PORT 8080'));