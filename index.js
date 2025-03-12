const express = require('express');

const app = express();


app.listen(3000, ()=>{
    console.log('Server is running on port 3000.')
})

app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.get('/welcome', (req, res)=>{
    res.send("Welcome to the world of express");
});


const authMiddleware = (req, res, next)=>{

}

app.use((req, res, next) =>{
    console.log("Middleware")
    next();
})

app.get('/secret', (req, res)=>{
res.send("Secret page")
})



const requestLogger = (req, res, next)=>{
    const currentTime = new Date().toLocaleString();
    console.log(`${currentTime} ${req.method} ${req.url}`);
    res.send(currentTime, req.method, req.url);
    next();
}
app.use(requestLogger);