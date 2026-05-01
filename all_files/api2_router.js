expr=require('express')
router=expr.Router()

const mvi =[{'id':101,'name':'ved','year':2006},{'id':102,'name':'het','year':2007},{'id':103,'name':'dhruv','year':2006}]
router.get('/m',(req,res)=>{
    res.json(mvi)
})
router.get('/m/:id',(req,res)=>{
    data=mvi.filter((a)=>a.id==req.params.id)
    if(data.length>0){
        res.json(mvi[0])
    }
    else{
        res.send("no data found")
    }
})
module.exports=router