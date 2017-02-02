var List = require('../models/lists');
var User = require('../models/user');

var db = {
    getAllLists: function(req, res, callback) {
        List.find({}).sort({date: -1}).exec(function(err,lists){
         if (err) console.error(err);
             callback(lists);
        });
    },
    getAllUsers : function(req, res, callback) {
        User.find(function(err,users){
         if (err) console.error(err);
             callback(users);
        });
    },
    createNewList: function(req, res, callback){
      new List({
            title : req.body.title,
            description : req.body.description,
            items: req.body.books,
            author : {
              name : req.body.author.name,
              id : req.body.author.id,
              url : req.body.author.url
            }
        }).save(function(err, result) {
            if ( err ) console.error(err);
            callback(result._id);
        });
    },
    createNewUser: function(req, res, callback){
        new User({
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
