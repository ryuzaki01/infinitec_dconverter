/**
 * Created by supardi on 4/23/15.
 */
var cli = require("cli");

var jar = '/home/cermati/Infinitec/infinitec_aws/dist/DocumentConverter.jar';
var office = '/etc/libreoffice/soffice';


var dconverter = function(input, output, format){}

dconverter.prototype.pdfToImage = function(input, output, format, callback, failedCallback){
    var arg = '-jar ' + jar + ' -input ' + input + ' -output ' + output + ' -format ' + format + ' -mode 1';
    cli.Cli.execute('java', arg, function (command, args, env) {
        //console.log('Program has been automatically executed. (' + env + ')');

    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on unix env---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

dconverter.prototype.docToPdf = function(input, output, callback, failedCallback){
    var args = ['-jar', jar , '-office', office , '-input', input, '-output', output, '-mode', '2'];
    var env = "mac";
    cli.Cli.execute('java', args, function (command, args, env) {
        //console.log('Program has been automatically executed. (' + env + ')');

    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on unix env  ---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

dconverter.prototype.docToImage = function(input, output, format, callback, failedCallback){
    var args = ['-jar', jar , '-office', office , '-input', input, '-output', output, '-format', format, '-mode', '3'];
    cli.Cli.execute('java', args, function (command, args, env) {

    }, function (command, args, env) {
        console.error('------------- Error execute on windows try on unix env  ---------------');
    }, function (command, args, env) {
        console.error('------------- Error execute on unix env  ---------------');
    }, callback, failedCallback);
};

convert = new dconverter();
module.exports = convert;
