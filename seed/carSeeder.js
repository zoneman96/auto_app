var Car = require("../models/car");

var data = [
    {
        image: [
            "http://www.findcars.com/px/teas/1305456/1305456.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456a.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456b.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456c.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456d.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456e.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456f.org.jpg",
            "http://www.findcars.com/px/teas/1305456/1305456g.org.jpg"
            ],
        year: "2012",
        make: "Ford",
        model: "Fusion",
        trim: "SEL AWD",
        miles: 135123,
        price: 8995,
        body: "Loaded leather awd 4x4 local trade runs drives nice.",
        featured: true
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1379098/1379098.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098a.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098b.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098c.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098d.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098e.org.jpg",
            "http://www.findcars.com/px/teas/1379098/1379098f.org.jpg",
            ],
        year: "2007",
        make: "Chrysler",
        model: "Sebring",
        trim: "toruing",
        miles: 139911,
        price: 4495,
        body: "Local trade, clean, good running affordable car."
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1384116/1384116.org.jpg",
            "http://www.findcars.com/px/teas/1384116/1384116a.org.jpg",
            "http://www.findcars.com/px/teas/1384116/1384116b.org.jpg",
            "http://www.findcars.com/px/teas/1384116/1384116c.org.jpg",
            "http://www.findcars.com/px/teas/1384116/1384116d.org.jpg",
            ],
        year: "2005",
        make: "Ford",
        model: "Freestyle",
        trim: "3 rows seating",
        miles: 131097,
        price: 4995,
        body: "Leather DVD player 3 rows seats loaded."
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1261393/1261393.org.jpg",
            "http://www.findcars.com/px/teas/1261393/1261393a.org.jpg",
            "http://www.findcars.com/px/teas/1261393/1261393b.org.jpg",
            "http://www.findcars.com/px/teas/1261393/1261393c.org.jpg"
            ],
        year: "2010",
        make: "Scion",
        model: "xD",
        trim: "",
        miles: 62000,
        price: 7995,
        body: "Low miles loaded gas saver! New car trade.",
        featured: true
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1313552/1313552.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552a.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552b.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552c.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552d.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552e.org.jpg",
            "http://www.findcars.com/px/teas/1313552/1313552f.org.jpg",
            ],
        year: "2008",
        make: "Chevrolet",
        model: "HHR",
        trim: "LT",
        miles: 10123,
        price: 4995,
        body: "Great on gas over 30 mpg loaded LT package low miles.",
        featured: false
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1375153/1375153.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153a.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153b.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153c.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153d.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153e.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153f.org.jpg",
            "http://www.findcars.com/px/teas/1375153/1375153g.org.jpg",
            ],
        year: "2007",
        make: "Dodge",
        model: "Charger",
        trim: "SXT Sport SE",
        miles: 141012,
        price: 5995,
        body: "Loaded very clean fun car, great running and looking charger.",
        featured: true
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1284759/1284759.org.jpg",
            "http://www.findcars.com/px/teas/1284759/1284759.orga.jpg",
            "http://www.findcars.com/px/teas/1284759/1284759.orgb.jpg",
            "http://www.findcars.com/px/teas/1284759/1284759.orgc.jpg",
            "http://www.findcars.com/px/teas/1284759/1284759.orgd.jpg",
            ],
        year: "2006",
        make: "Chevrolet",
        model: "TrailBlazer",
        trim: "EXT SE",
        miles: 148123,
        price: 5495,
        body: "Loaded three rows seating more info coming soon.",
        featured: false
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1381946/1381946.org.jpg",
            "http://www.findcars.com/px/teas/1381946/1381946a.org.jpg",
            "http://www.findcars.com/px/teas/1381946/1381946b.org.jpg",
            "http://www.findcars.com/px/teas/1381946/1381946c.org.jpg",
            ],
        year: "2006",
        make: "Nissan",
        model: "Murano",
        trim: "SL AWD",
        miles: 150912,
        price: 4995,
        body: "Loaded clean good running murano.",
        featured: false
    },
    {
        image: [
            "http://www.findcars.com/px/teas/1386751/1386751.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751a.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751b.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751c.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751d.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751e.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751f.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751g.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751h.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751i.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751j.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751k.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751l.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751m.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751n.org.jpg",
            "http://www.findcars.com/px/teas/1386751/1386751o.org.jpg",
            ],
        year: "2005",
        make: "Dodge",
        model: "Magnum",
        trim: "R/T",
        miles: 105123,
        price: 7995,
        body: "Up for sale is a very nice running and super fun 2005 magnum R/T. It is a AWD 4x4 model and has the super fun 5.7 lt hemi v8 engine. It has a really great history showing only 2 owners. When we bought the car, I personally drove it around and noticed that the engine was starting to run hot, I took it in to my engine shop where they diagnosed it as a intake gasket. I spent over $5000 dollars wholesale cost rebuilding the engine right as the car was nice enough to justify it. There are many receipts that go with the car detailing all that has been done. This car runs beautifully now. The trans shifts all gears like it should. All of the power options on the magnum are working as far as I can see (windows, cruise, tilt, power options, radio etc) The tires look good. The interior of this Magnum R/T is leather and has a great look to it. The cosmetic on the outside looks very good for the year as well, I really videoed it well so you can see what the car is and any minor blemishes (small bubble dime size/quarter size or so on front hood, small scratch here and there etc) For the year it really has a great body and look in my opinion, nothing to me that is overly noticable etc. the underside looks great with only normal minor road wear. I noticed a ABS light come and go when I was driving it, it is not on now or when I videoed it but it comes and goes. A/c was blowing nice and cold. I really do not want to overcall it or undercall it, let the video, pics, and description tell the story. The miles are 103k which means that this car was driven on average of 8500 k miles per a year on average. The rebuild on the original engine has less than 300 miles on it. Like new. This car comes with a clean and clear title ready for you to register.",
        featured: false
    },
]

function seedDB() {
    //remove all Items
    Car.remove({}, function(err){
        console.log("Removed Products")
        data.forEach(function(seed){
            Car.create(seed, function(err, car){
                if(err){
                    console.log(err)
                } else {
                    console.log("Added now car")
                }
            })
        })
    })
}

module.exports = seedDB;