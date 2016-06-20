var exec = require("child_process").exec;
var url = require("url");

function run(request, response) {


	var querys = url.parse(request.url).query.split("&");
	var params = {};
	for (var i in querys) {
		var data = querys[i].split("=");
		params[data[0]] = data[1];
	}
	if (params.action == "create") {
		createBranch(params.type, params.name, function(error, stdout, stderr) {
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			if (error) {
				//console.log(error.stack);
				//分支已存在
				if(error.stack.indexOf("svn: E160020")>-1){
					response.end(JSON.stringify({
						ret: 1
					}));
				}else{
					response.end(JSON.stringify({
						ret: -1
					}));
				}
			} else {
				response.end(JSON.stringify({
					ret: 0
				}));
			}
		});
	}
	return;
}

function createBranch(type, name, callback) {
	if (type && name) {
		if (type == "mp") {
			exec("svn copy http://scm-gy/gzrd/gzrd_mail_rep/mmbiz_proj/trunk/mmbizweb/mmbizweb http://scm-gy/gzrd/gzrd_mail_rep/mmbiz_proj/branches/mmbizweb/mmbizweb/" + name + " -m 'create by auto'", callback);
		} else if (type == "wap") {
			exec("svn copy http://scm-gy/gzrd/gzrd_mail_rep/mmbiz_proj/trunk/mmbizweb/mmbizwap http://scm-gy/gzrd/gzrd_mail_rep/mmbiz_proj/branches/mmbizweb/mmbizwap/" + name + " -m 'create by auto'", callback);
		}
	}
}
exports.run = run;