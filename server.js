const http = require('http');

const server  = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
    <!doctype>
    <html>    
    <head>  
    <title>  
    Gandalf the coolest 
    </title>  
    </head>  
    <body>    
    <center> Click on <a href="https://www.youtube.com/watch?v=G1IbRujko-A&t=23s"> this link </a> for MAGIC.   
    </center>  
    </body>  
    </html>
    `);
});

server.listen(3000, () => console.log('success'));