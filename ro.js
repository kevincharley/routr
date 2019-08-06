var express=require('express')
var emprouter=require("./router/emprouter")
var prdrouter=require("./router/prdrouter")
const ro=express();
ro.set("view engine","ejs");
ro.set("views","./src/views")
ro.use("/prd",prdrouter)
ro.use("/emp",emprouter)
ro.listen(8000,function(res,req){
    console.log("server started")
})
ro.get("/",function(req,res){
   // res.sendFile(__dirname+"/src/views/home.html")
   res.render('home')
})