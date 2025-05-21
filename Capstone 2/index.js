import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT=process.env.PORT || 3000;
import { v4 as uuidv4 } from 'uuid';
var blogs={};
var clicked=false;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static ("public"))



app.get("/",(req,res)=>{
    res.render("index.ejs",{blogs,clicked})
})
app.post("/submit",(req,res)=>{
const title=req.body["title"];
const content=req.body["Blog"];
const id =uuidv4();
clicked=true;
blogs[id]={title,content},
res.redirect("/?submit=true")

})

app.get("/blog/:id",(req,res)=>{
    const url=blogs[req.params.id]
    const id=req.params.id;
    if(url){
        res.render("blog.ejs",{id,blogs,clicked,url})
    }
})

app.post("/blog/:id/edit",(req,res)=>{
      const url=blogs[req.params.id]
      if(url){
        blogs[req.params.id].title=req.body.title
      blogs[req.params.id].content=req.body.Blog
        res.redirect(`/`)
      }
})

app.get("/blog/:id/edit",(req,res)=>{
     const url=blogs[req.params.id]
    const id=req.params.id;
    res.render("edit.ejs",{id,blogs,clicked,url})
}
)

app.post("/blog/:id/delete",(req,res)=>{
    const url=blogs[req.params.id];
    const id =req.params.id;
    if(url){
        delete blogs[id]
        var keyLength=Object.keys(blogs).length;
        if(keyLength===0){
            clicked=false;
        }
        res.redirect("/")
        
    }
})
app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
});
