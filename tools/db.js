var List = require('../models/lists');

var db = {
    getAllLists: function(req, res, callback) {
        List.find({}).sort({date: -1}).exec(function(err,result){
         if (err) console.error(err);
             callback(result);
        });
    },
    createNewList: function(req, res, callback){
      console.log(req.body);
      new List({
            title : req.body.title,
            description : req.body.description,
            items: req.body.books,
            author : req.body.author
        }).save(function(err, result) {
            if ( err ) console.error(err);
            callback(result._id);
        });
    }
}

module.exports = db;
