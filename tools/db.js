var List = require('../models/lists');
var User = require('../models/user');

var db = {
    getAllLists: function(req, res, callback) {
        List.find({}).sort({date: -1}).exec(function(err,result){
         if (err) console.error(err);
             callback(result);
        });
    },
    createNewList: function(req, res, callback){
      console.log(req.body, ' is new list');
      new List({
            title : req.body.title,
            description : req.body.description,
            items: req.body.books,
            author : req.body.author
        }).save(function(err, result) {
            if ( err ) console.error(err);
            callback(result._id);
        });
    },
    createNewUser: function(req, res, callback){
        console.log(req.body, ' is new user');
        new List({
              id : req.body.id,
              name : req.body.name,
              url: req.body.url,
              lists : req.body.lists
          }).save(function(err, result) {
              if ( err ) console.error(err);
              callback(result._id);
          });
      }
}

module.exports = db;
