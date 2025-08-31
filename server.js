import express from "express";
const app=express();
const port=8000;
import sum from "./sum.js";

app.get('/home',(req,res)=>{
    res.json(
        {
            message:"iam root"
            
        }
    )
});

app.get("/getsum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    });

})



app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});