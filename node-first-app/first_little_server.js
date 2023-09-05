const http = require('http');



const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();

    res.write('<html>');
    res.write('<body>')
    res.write('Hello Node.js!');
    res.write('<div style = "height:30rem; width:30rem; background-color : blue; text-alignment:center; font:10px; ">go </div>')
    res.write('</body>')
    res.write('</html>')

    res.end(); // response added.any response further that would cause error.

});

server.listen(3000);