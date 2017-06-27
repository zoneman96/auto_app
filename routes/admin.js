var express         = require("express"),
    router          = express.Router({mergeParams: true}),
    passport        = require("passport"),
    Car             = require("../models/car");

router.get("/", function(req, res, next){
    res.redirect("/admin/login");
})

//Show Signup Page
router.get("/signup", function(req, res, next){
    res.render("signup");
});

//Handle Signup Logic
router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/admin/signup",
    failureFlash: true
}), function(req, res, next){
        if(req.session.oldUrl){
            //get and save old url
            var oldUrl = req.session.oldUrl;
            //remove ald url global variable
            req.session.oldUrl = null;
            //redirect to old url
            res.redirect(oldUrl);
        } else {
            res.redirect("/")
        }
});

//Show Login Form
router.get("/login", function(req, res, next){
    res.render("login");
});

//Handle Login Logic
router.post("/login", passport.authenticate("local-signin",
    {
        successRedirect: "/",
        failureRedirect: "/admin/login",
        failureFlash: true
    }), function(req, res, next){
        if(req.session.oldUrl){
            //get and save old url
            var oldUrl = req.session.oldUrl;
            //remove ald url global variable
            req.session.oldUrl = null;
            //redirect to old url
            res.redirect(oldUrl);
        } else {
            res.redirect("/")
        }
});

//Logout
router.get("/logout", function(req, res, next){
    req.logout()
    res.redirect("/admin/login")
})

module.exports = router;