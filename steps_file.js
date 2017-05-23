'use strict';

module.exports = function() {
    return actor({

        yell: function(message){
            this.say(`\n*****   ${message}   *****`);
        }

    });
}
