const express=require("express")
const app=express();
app.get("/about",(req,res)=>{
    return res.send("hello"+`${req.query.name}`);
})
app.listen(8000,()=>console.log("server started"));