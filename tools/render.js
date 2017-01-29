const db = require('./db');

var render = {
  cleanLayout: function(req, res){
    res.render('main',{
      title:'Best books of',
    })
  }
}
module.exports = render;
