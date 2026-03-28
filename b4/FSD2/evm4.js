var eventemiter=require('events')
var ee=new eventemiter()


        

ee.on("circle",(r)=>{
    if(r<0){
        console.log(`Radius must be positive of greater then Zero`)
    }
    else{
        console.log(`Area of Circle is : ${3.14*r*r}`)
    }
    })
ee.on("square",(l)=>{
    if(l<=0){
        console.log(`length must be positive of greater then Zero`)
    }
    else{
        console.log(`Area of square is : ${l*l}`)
    }
    })


ee.emit("circle",10)
ee.emit("square",5)

