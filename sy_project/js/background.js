/*chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'sy_msg'){
        sendResponse('BACK');
    }
});*/
//chrome.storage.StorageArea.clear();
//chrome.storage.local.set({obj:{name:"project1"}});
//chrome.storage.local.set({obj1:{name:"wowo",age:"10"}});
/*setTimeout(function(){
	chrome.tabs.query({}, function(tabs) {
		console.log(tabs);
		return;
	  chrome.tabs.sendMessage(tabs[0].id, "msg", function(response) {
	    console.log(response);
	  });
	});
}
,1000)
*/
//添加xml和json右键快捷键
function initMenu() {
	chrome.contextMenus.create({
		type: "normal",
		title: "XML数据",
		onclick: function() {
			chrome.tabs.query({
				active: true
			}, function(tabs) {
				if (tabs[0]) {
					var url = tabs[0].url;
					window.open(tabs[0].url + "&f=xml");
				}
			});
		}
	})

	chrome.contextMenus.create({
		type: "normal",
		title: "JSON数据",
		onclick: function() {
			chrome.tabs.query({
				active: true
			}, function(tabs) {
				if (tabs[0]) {
					var url = tabs[0].url + "&f=json";
					$.ajax({
						url: url,
						type: "get",
						dataType: "json"
					}).done(function(json) {
						if (json.base_resp.ret == 0) {
							chrome.tabs.sendMessage(tabs[0].id, {
								info: "console",
								data: json
							});
						}
						console.log(json);
					});
				}
			});
		}
	})
}
initMenu();

