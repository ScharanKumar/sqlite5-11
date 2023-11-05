const express=require('express');
const {open}=require('sqlite')
const sqlite3=require('sqlite3')
const path=require('path')
let db=null
const dbpath=path.join(__dirname,"x.db")
const app=express()
app.use(express.json())
const y =async()=>{
    try{
        db=await open({
             filename : dbpath,
            driver:sqlite3.Database
        })
        app.listen(3566,()=>{
            console.log("Server is running at 3566")
        })
    }
    catch(e){
        console.log({e});
        process.exit(1)
    }
}
y();
app.get("/",async(request,response)=>{
    const quer = `
    select * from player;`;
    const a = await db.all(quer);
    response.send(a);
})
app.delete("/charan1",async(request,response)=>{
    const quer = `
    delete from player
    where name =='charan';`;
    const a = await db.delete(quer);
    console.log(a);
    
})