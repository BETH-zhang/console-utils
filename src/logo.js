// var cc = require('../util/color').cc;
var cc = require('./color.js');

function ZhikeLogo(contex){
	var version = '';
	try{
		version = contex ? 'v'+contex.pkg.version : '';
	}
	catch(e){}
	var logo = 
	'\n'+
	cc.red(   '                   _____             _______\n')+
	cc.red(   ' |___  ____   _\\_  |_|_|    \\     /  |     |\n')+
	cc.yellow('_|_|__ |  |     /  |_|_|     \\   /   |     |\n')+
	cc.green( '  / \\  |__|    /  ___|___     \\ /    |     |\n')+
	cc.green( ' /___\\___     /     /|\\        |     |     |\n')+
	cc.purple('  |_____|     |__  / | \\       |     |     |\n')+
	cc.blue(  '  |_____|         /  |  \\      |     |_____|\n')+
	cc.blue(  '____________________________________________\n') + ' ' + version + '\n\n';

	logo += ('need help?') + cc.purple(' ===> ') + cc.green('yo zhike:h') + '\n';
	
	if(contex && contex.generatorName){
		logo += '\nzhike: '+cc.green(contex.generatorName.toUpperCase())+'\n';
	}

	return logo;

};

exports.ZhikeLogo = ZhikeLogo;