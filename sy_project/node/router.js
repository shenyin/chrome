var svn=require("./service/svn");
var d=require("./service/default");
var url = require("url");

function route(_url){
	_url=url.parse(_url);
	if(_url.pathname=="/svn"){
		return svn;
	}else{
		return  d;
	}
}
exports.route=route;