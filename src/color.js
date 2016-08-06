function consoleColor(str,num){
	if (!num) {
		num = '32';
	}
	return "\u001b[" + num + "m" + str + "\u001b[0m";
}

function green(str){
	return consoleColor(str,32);
}

function yellow(str){
	return consoleColor(str,33);
}

function red(str){
	return consoleColor(str,31);
}

function blue(str){
	return consoleColor(str,34);
}

function purple(str){
	return consoleColor(str,36);
}

exports.green = green;
exports.yellow = yellow;
exports.red = red;
exports.blue = blue;
exports.purple = purple;