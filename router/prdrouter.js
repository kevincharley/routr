var express=require('express')
const router=express.Router();
module.exports=router;
router.get("/",function(req,res){
    res.render('products');
})
router.get("/new",function(req,res){
    res.send("new product")
})
router.get("/view",function(req,res){
    res.send("view product")
})
router.get("/edit",function(req,res){
    res.send("edit product")
})
router.get("/delete",function(req,res){
    res.send("delete product")
})