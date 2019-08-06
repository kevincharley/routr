var express=require('express')
const router=express.Router();
module.exports=router;
router.get("/",function(req,res){
    res.render('employee');
})
router.get("/new",function(req,res){
    res.send("new employee")
})
router.get("/view",function(req,res){
    res.send("view employee")
})
router.get("/edit",function(req,res){
    res.send("edit employee")
})
router.get("/delete",function(req,res){
    res.send("delete employee")
})