const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb+srv://devisaisriveeranki:FtBdS9XWVIsfJx5o@cluster0.psqe4e4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

connect.then(()=>{
    console.log("Database connected Successfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});

const LoginSchema=new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})

const collection=new mongoose.model("Passengerdata",LoginSchema);
module.exports=collection;