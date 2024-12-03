import express from "express"
import userRouter from "./routes/userRoute.js"
import connectDB from "./database/database.js"
import os from "os"
import cluster from  "cluster"





//total cpus
const totalcpus=os.cpus().length
//clustring
if(cluster.isPrimary){
    for(let i=0; i<totalcpus; i++){
        cluster.fork()
    }
}else{
    const app=express()
    const port =4000
    app.use(express.json())
app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`Server is running in port : ${port}`)
    connectDB()
})
}

