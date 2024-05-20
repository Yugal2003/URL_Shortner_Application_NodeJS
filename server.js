import express from 'express'
import mongoose from 'mongoose'
import { urlShort, originalUrl } from "./Controllers/url.js";


const app = express();
const port = 2828;

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/urlshortner")
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

  app.get('/',(req,res)=>{
    res.render("server.ejs",{shortUrl:null})
  })

  // handle url submission
  app.post("/shortUrlId", urlShort);

  // redirect to original url using short url
  app.get("/:shortCode", originalUrl);


app.listen(port,()=>console.log(`Server is running on port ${port}`))