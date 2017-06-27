var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    session         = require("express-session"),
    User            = require("./models/user"),
    Car             = require("./models/car")
    seedCarDB       = require("./seed/carSeeder");
    MongoStore      = require("connect-mongo")(session);

//Require Routes
var indexRoutes     = require("./routes/index");
var carRoutes       = require("./routes/car");
var adminRoutes     = require("./routes/admin");

// APP config
mongoose.Promise = global.Promise;
var dbUrl = process.env.DATABASEURL || "mongodb://localhost/auto_app";
mongoose.connect(dbUrl);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("semantic"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "AutoSecret",
    resave: false, 
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(methodOverride("_method"));

// Passport Config
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// Sending to all pages
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.login = req.isAuthenticated();
    next();
})

// SeedDb
// seedCarDB();

//Root Route
app.get("/", function(req, res){
    Car.find({"featured": true}, function(err, cars){
        if(err){
            console.log(err)
        }
        res.render("landing", {cars:cars})
    })
})

//Routes
app.use("/", indexRoutes);
app.use("/cars", carRoutes);
app.use("/admin", adminRoutes);

// On server
app.listen(process.env.PORT || 3000, function(req,res) {
    console.log("SERVER STARTED");
});