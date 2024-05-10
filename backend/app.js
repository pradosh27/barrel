import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

mongoose.connect("mongodb://localhost:27017/Furniture",{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>console.log("MongoDB is connected succesfully"))
.catch((err)=>{
    console.log(err);
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const furnitureSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    currency: String,
    price: Number,
    img_link:String,
});

const Furniture = new mongoose.model("Furniture",furnitureSchema);

app.post("/api/v1/furniture/new",async(req,res)=>{
    const furniture = await Furniture.create(req.body);
    res.status(201).json({
        success:true,
        furniture
    })
})
app.get("/api/v1/furniture",async(req,res)=>{
    const furniture = await Furniture.find();
    res.status(200).json({
        success:true,
        furniture
    })
})


app.listen(3000,()=>{
    console.log("server is listening at port no 3000");
})
