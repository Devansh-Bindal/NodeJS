const http=require('http');
const url=require('url');
const users=require('./user_info');
const port=6000;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    let parseUrl=url.parse(req.url);
    let path=parseUrl.pathname;
    if (path==='/')
    {
        res.end("Pass data in query then search for the user");
    }
    else if(path==='/users')
    {
        const queryParam=url.parse(req.url,true).query
        const user=users.search(queryParam.Username);
        res.end(JSON.stringify(user));
    }
})
server.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});