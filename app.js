const router=require('./router/userRouter') 
const express=require('express')
const app=express()
const PORT= process.env.PORT|| 3000;
app.use(express.json());
app.use(router);
app.listen(PORT,()=>console.log("server is running in port "))