// const http = require('http');
const express = require('express');
const bodyParsher = require('body-parser');
const path = require('path');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const db = require('./util/database.js');

const sessionStore = new MySQLStore({}/* session store options */, db);



const app = express();

const csrfProtection = csrf();

app.set('view engine', 'pug');  // what to see
app.set('views', 'view');       // where to see the pug files.

const routerAdminData = require('./routes/admin.js');
const routerShop = require('./routes/shop.js');
const routerLogin = require('./routes/auth.js');
const routerError = require('./routes/error.js');
const routerCart = require('./routes/cart.js');


app.use(bodyParsher.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
    })
  );
app.use(csrfProtection);
app.use( (req, res, next ) => {             // in all the view we are rendering these two values will be automatically passed.
  res.locals.autharized = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})
app.use(flash());


app.use('/admin', routerAdminData.router);
app.use(routerShop);
app.use(routerLogin);
app.use(routerCart);
app.use(routerError);

// const server = http.createServer(app);

// server.listen(60000);    // no need to create server and listening.

// express had a method listen which auto matically create a server and listening to the given port.

app.listen(3000);