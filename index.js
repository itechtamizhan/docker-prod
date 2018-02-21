var express = require('express'); 
var mongo = require('mongodb').MongoClient; 
var app = express(); 
var uuid = require('uuid'); 
var path = require('path');
var logger = require('morgan'); 
var url = 'mongodb://db:27017/'; 
var port= 6000 ; 
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');

app.use(logger('dev')); app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
   var response = {};
   mongo.connect(url,function(err,db){
   var dbCon = db.db('vivek');

    if(err){
        response.code = 400;
        response.message = err ;
        res.statusCode = 400 ;
        return  res.send(res);
    }
	db.close();
        console.log("Test Endpoint Working.");
        response.code = 200 ;
        response.message = "Database Connected Successfully.";
        return res.send(response);
   });
});


app.post('/customer',function(req,res){
   var response = {};
   var request  = req.body ;
   mongo.connect(url,function(err,db){
    var dbCon = db.db('vivek');
//	return res.send(request);   
 console.log("Database Connected Successfully.");
    if(err){
        response.code = 400;
        response.message = err ;
	res.statusCode = 400 ;
        return  res.send(res);
    }   
	response.databaseConnection = true ;
	request._id = uuid.v4();
        dbCon.collection('account').insert(request,function(err1,resp){
	  if(err1){
            response.code = 400;
            response.message = err ;
	    return res.send(response); 
	  }	
           console.log("Test Endpoint Working.");
           response.code = 200 ; 
           response.message = "Record inserted Successfully.";
           return res.send(response);   
        
        });
    });
});


app.listen(port,function(){
	console.log("Server running on, PORT :"+port);
});
