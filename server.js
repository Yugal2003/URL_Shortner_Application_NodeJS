import express from 'express'
import mongoose from 'mongoose'
import { urlShort, originalUrl } from "./Controllers/url.js";


const app = express();
const port = 10000;

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://reactjsgeekster:Qfo4d0oyHgga70vj@urlshortner.4xgwyws.mongodb.net/")
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