/**
 * Created by supardi on 4/23/15.
 */
var cli = require("cli");

var jar = __dirname + '/bin/DocumentConverter.jar';
var officeToPdfExe = __dirname + '/bin/OfficeToPDF.exe';

//Environment : windows, unix
var env = "unix";


var dconvert = function(officePath, engine){
    this.officePath = officePath;
    this.engine = engine;
}

dconvert.prototype.pdfToImage = function(input, output, format, callback, failedCallback){
    var args = ['-jar', jar, '-input', input, '-output', output, '-format', format, '-mode', '1'];
    cli.Cli.execute('java', args, function (command, args, env) {
        //console.log('Program has been automatically executed. (' + env + ')');

    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on ' + env + '  ---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

dconvert.prototype.docToPdf = function(input, output, callback, failedCallback){
    var args = null;
    if(this.engine == 1){
        args = ['-jar', jar , '-office', this.officePath , '-input', input, '-output', output, '-mode', '2'];
    }else if(this.engine == 2){
        args = ['-jar', jar , '-office', officeToPdfExe, '-input', input, '-output', output, '-mode', '2', '-engine', '2'];
    }

    cli.Cli.execute('java', args, function (command, args, env) {
        //console.log('Program has been automatically executed. (' + env + ')');

    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on ' + env + '  ---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

dconvert.prototype.docToImage = function(input, output, format, callback, failedCallback){
    var args = null;
    if(this.engine == 1){
        args = ['-jar', jar , '-office', this.officePath , '-input', input, '-output', output, '-format', format, '-mode', '3'];
    }else if(this.engine == 2){
        args = ['-jar', jar , '-office', officeToPdfExe , '-input', input, '-output', output, '-format', format, '-mode', '3', '-engine', '2'];
    }

    cli.Cli.execute('java', args, function (command, args, env) {
    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on ' + env + '  ---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

module.exports = function dconverter(officePath, engine){
    return new dconvert(officePath, engine);
};

