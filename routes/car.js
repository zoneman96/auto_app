var express     = require("express"),
    router      = express.Router({mergeParams:true}),
    Car         = require("../models/car");

//Enums
var Sort = [
    "price",
    "miles",
    "make",
    "year",
]

//Index
router.get("/", function(req, res){
    Car.find({}, function(err, cars){
        if(err){
            console.log(err)
        } else {
            res.render("cars", {cars:cars})
        }
    })
})

//Sort Cars
router.post("/sort", function(req, res, next){
    var sortEnum = Sort[req.body.sort];
    Car.find({}).sort([[sortEnum, -1]]).exec(function(err, cars){
        if(err){
            console.log(err)
        } else {
            res.render("cars", {cars:cars})
        }
    })
})

//New
router.get("/new", function(req, res) {
    res.render("new")
})

//Create
router.post("/", function(req, res){
    console.log(req.body.car)
    Car.create(req.body.car, function(err, car){
        if(err){
            console.log(err)
        } else {
            res.redirect("/cars")
        }
    })
})

//Show 
router.get("/:id", function(req, res){
    Car.findById(req.params.id, function(err, car){
        if(err){
            console.log(err)
        } else {
            res.render("show", {car:car})
        }
    })
})

//Edit
router.get("/:id/edit", function(req, res){
    Car.findById(req.params.id, function(err, car){
        if(err){
            console.log(err)
        } else {
            res.render("edit", {car:car})
        }
    })
})

//Update
router.put("/:id", function(req, res){
    Car.findByIdAndUpdate(req.params.id, req.body.car, function(err, car){
        if(err) {
            res.redirect("/cars")
        } else {
            res.redirect("/cars/" + req.params.id)
        }
    })
})

//Destroy
router.delete("/:id", function(req, res){
    Car.findByIdAndRemove(req.params.id, function(err){
        res.redirect("/cars")
    })
})

module.exports = router;