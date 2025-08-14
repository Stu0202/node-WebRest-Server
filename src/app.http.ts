import fs = require("fs");

const http = require('node:http')

const server = http.createServer((req: { url: any; }, res: any) => {
    console.log(req.url);

    // res.writeHead(200,{'Content-Type':'text/html'})
    // res.write('<h1>Hola Mundo</h1>')
    // res.end();

    // const data = {name: 'Jorge Reyes ', age:23, city:'Quito'}

    // res.writeHead(200,{'Content-Type':'application/json'})
    // res.end(JSON.stringify(data));

    if(req.url == '/'){
        const htmlFile = fs.readFileSync('./public/index.html','utf-8')
  
        res.writeHead(200, {'Content-Type':'text/html'} )
    

        res.end(htmlFile)
        
        return;
    }

    if(req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type':'application/javascript'} )
    }else if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type':'text/css'} )
    }

    if(req.url!='favicon.ico'){

        const responseContent = fs.readFileSync(`./public${req.url}`,'utf-8')
        res.end(responseContent);
    }
    
});

server.listen(8080, ()=> {
    console.log('Server running on port 8080');
})