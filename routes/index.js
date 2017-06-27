var express         = require("express"),
    router          = express.Router({mergeParams: true}),
    passport        = require("passport"),
    Car             = require("../models/car");

//Show About Page
router.get("/about", function(req, res, next){
    res.render("about");
});

// Show Contact Page
router.get("/contact", function(req, res, next){
    res.render("contact");
})
module.exports = router;