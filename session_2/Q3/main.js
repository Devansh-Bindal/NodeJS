const http=require('http');
const port=3000;

const server=http.createServer((req,res)=>
{
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200,{'Content-Type': 'application/json'});
    if(req.url==='/home')
    {
        res.end("Home Page");
    }
    else if(req.url==='/about')
    {
        res.end("About Page");
    }
    else if(req.url==='/contact')
    {
        res.end("Contact Page");
    }
})

server.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});
