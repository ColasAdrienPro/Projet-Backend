const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use("/users",userRouter)
app.use("/recipes",recipeRouter)


app.listen(3000, (err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("vous etes connecter sur le port 3000");
        
    }
})

mongoose.connect("mongodb://localhost:27017/recipes")
mongoose.connect("mongodb://localhost:27017/users")

