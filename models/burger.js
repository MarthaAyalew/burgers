var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cd(res);
        })
    }
}
module.exports = burger;
