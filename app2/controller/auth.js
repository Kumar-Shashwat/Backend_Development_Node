const User = require('../models/user');
const bcryptjs = require('bcryptjs');

module.exports.getLogin = (req, res, next) => {

    let message = req.flash('error');
    if(message.length > 0)
        message = message[0];
    else    
        message = null;

    res.render('auth/login.pug',{
        title : 'login',
        path : '/login',
        errorMessage : message,
        // csrfToken : req.csrfToken(),
    });
};

exports.postLogin = (req, res, next ) => {
    // req.isLogin = "true";
    // res.setHeader('Set-Cookie', 'isLogin = true');

    const email = req.body.email;
    const password = req.body.password;

    User.findByEmail(email).then(([rows, fieldData]) => {
        if(rows.length === 0){
            req.flash('error','Invalid email and password.');
            return res.redirect('/login');
        }
        const user = rows[0];
        bcryptjs.compare(password, user.password ).then(doMatch => {
            if(doMatch){
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save( (err) => {
                    console.log(err);
                    res.redirect('/');
                });  // redirect is faster than req.session.anyMethod(). To overcome this issue this save method is used.
            }
            req.flash('error','Invalid email and password.');
            return res.redirect('/login');
        }).catch(err => console.log(err));
        
    }).catch(err => console.log(err));


       
}

exports.getLogout = (req, res, next) => {
    req.session.destroy( (err) => {
        console.log(err);
        res.redirect('/');
    });
}

exports.getRegister = (req, res, next) => {

    let message = req.flash('error');
    if(message.length > 0)
        message = message[0];
    else    
        message = null;

    res.render('auth/register.pug', {
        title: 'register' , 
        path : '/register',
        errorMessage : message,
        // csrfToken: req.csrfToken(),
    });
};

exports.postRegister = (req, res, next ) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    // only unique email address can be inserted into databases.

    // insert the email and password to the user table by encrypting the passowd.

    bcryptjs.hash(password, 12).then((hashedPassword) => { // bcryptjs return a promise
        //console.log(hashedPassword);                     // hashed passwods can to reverted to the original password.

        const user = new User(name, email, hashedPassword);

        user.save().then( () => {
            res.redirect('/login');
            })
        .catch(err => {

            req.flash('error','This email  is already registered.');
            console.log(err);
            res.redirect('/register');
        });
    }).catch(err => console.log(err));
    


    

    // User.insert({em, pass}).then(redirect('/login')). catch(err => console.log(err));

    // res.render('/');
    
    
};