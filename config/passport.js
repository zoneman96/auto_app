var passport        = require("passport");
    User            = require("../models/user")
    LocalStrategy   = require("passport-local").Strategy;


passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use("local-signup", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password,done){
    User.findOne({"email": email}, function(err, user){
        if(err){
            console.log(err);
            return done(err)
        }
        if(user){
            return done(null, false)
        }
        var newUser = new User();
        newUser.email = email,
        newUser.password = newUser.encryptPassword(password)
        newUser.save(function(err, result){
            if(err){
                console.log(err);
                return done(err)
            }
            return done(null, newUser)
        })
    })
}))

passport.use("local-signin", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({"email": email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false)
        }
        if(!user.validPassword(password)) {
            return done(null, false)
        }
        return done(null, user);
    });
}))