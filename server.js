const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const recipeRouter = require("./routes/recipeRouter")
const app = express()

app.use(express.json());
app.use(cors())


app.use("/users",userRouter)
app.use("/recipes",recipeRouter)


app.listen(3000, (err)=>{
    if (err) {
        console.log(err);
        
    }else{
        console.log("vous etes connecter sur le port 3000");
        
    }
})

mongoose.connect("mongodb://localhost:27017/RecipesMasters")

