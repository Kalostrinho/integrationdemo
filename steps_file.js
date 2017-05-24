'use strict';

module.exports = function() {
    return actor({

        yell: function(message){
            this.say(`\n*****   ${message}   *****`);
        },

        logStep: function(stepType = "INFO", step){

            switch(stepType.toUpperCase()){

                case "INFO":
                    this.say(`[${stepType}]: ${step}...`);
                    break;

                case "PASS": case "PASSED": case "P": case "Y": case "YES": case "SUCCESS":
                this.say(`---   [PASS]   ---   ${step}`);
                break;

                case "FAIL": case "FAILED": case "F": case "N": case "NO": case "FAILURE":
                this.say(`xxx  [FAIL]   xxx   ${step}`);
                break;

            }
        }

    });
}
