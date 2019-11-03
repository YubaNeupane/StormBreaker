let express = require("express")
var firebase = require("firebase")
var http =require("http")
var app = firebase.initializeApp({apiKey: "AIzaSyCtkcoYUSY9wY4JEm7GfWAS5Dhjexk_hcQ",
authDomain: "hackatonpsu.firebaseapp.com",
databaseURL: "https://hackatonpsu.firebaseio.com",
projectId: "hackatonpsu",
storageBucket: "hackatonpsu.appspot.com",
messagingSenderId: "960025410178",
appId: "1:960025410178:web:1fa76203a1f43ea14f529b"});
var app = express()
let bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/",(req,res)=>{
    var options = {
        "method": "GET",
        "hostname": "ip-api.com",
        "port": null,
        "path": "/json/"+req.query.ip.ip,
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            var database = firebase.database();
            var ref = database.ref("size")
            ref.push({
            zip:body.zip,
            size:req.query.distance,
            time:Date.now(),
            status: 0

            })
        res.end("hello world")




        });
    });
    
    req.end();
    
    
})

app.listen(80)
