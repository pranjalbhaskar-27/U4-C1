const express= require('express');
const app=express();
app.use(logger);
app.get('/books', (res,req)=>{
    return res.send({route:'/books'})
});

app.get('/libraries', (res,req)=>{
    return res.send({route:'/libraries',permission:true})
});

app.get('/authors', (res,req)=>{
    return res.send({route:'/authors',permission:true})
});

function logger(res,req,next){
    console.log('logger')
    next()
}

app.listen(5000, ()=>{
    console.log('listening on port 5000')
})

