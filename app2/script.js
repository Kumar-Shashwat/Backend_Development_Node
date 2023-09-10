// const http = require('http');
const express = require('express');
const bodyParsher = require('body-parser');

// const own_fun = (req, res) => {

//     console.log(req);
//     res.write('<html>'),
//     res.write('<title>'),
//     res.write('app2'),
//     res.write('</title>'),
//     res.write('<body>'),
//     res.write('Kumar Shashwat is developing app2.'),
//     res.write('</body>'),
    
//     res.write('</html>')
//     res.end();
// };
// const server = http.createServer(own_fun);


const app = express();

const routerAdmin = require('./routes/admin.js');
const routerShop = require('./routes/shop.js');
const routerError = require('./routes/error.js');


app.use(bodyParsher.urlencoded());

app.use('/admin', routerAdmin);
app.use(routerShop);
app.use(routerError);




// const server = http.createServer(app);

// server.listen(60000);    // no need to create server and listening.

// express had a method listen which auto matically create a server and listening to the given port.

app.listen(3000);
