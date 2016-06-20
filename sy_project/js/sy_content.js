/*chrome.runtime.sendMessage('sy_msg', function(response){
	console.log(response)
});*/
/*chrome.storage.local.get("obj1",function(data){
		console.log(data);
	}) */
/*setTimeout(function(){
	chrome.storage.local.get("key",function(data){
		console.log(data);
	})
}
,1000)*/
/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(request);
      sendResponse("yinshen");
  });*/

//mp域名临时登录
function initLogin() {
  if ((window.location.hostname == "devyin.mp.weixin.qq.com" || window.location.hostname == "mp.weixin.qq.com") && $("#loginBt").length > 0) {
    var users = {
      "dd_test": "t123456789",
      "weixin_media1": "dd123456",
      "dd_testing605@mp.qq.com": "dOWXvuLurlep",
      "dd_testing901@mp.qq.com": "IRV5N3NFpS",
      "dd_testing95@mp.qq.com": "25fzeFVqfF",
    };

    var userHMTL = "";
    var i = 0;
    for (var key in users) {
      i++;
      userHMTL += "<a href='javascript:;' style='font-size: 20px' class='chrome_user' data-name='" + key + "' data-pwd='" + users[key] + "'>" + key + "</a>&nbsp;&nbsp;&nbsp;&nbsp;"
        //每3个账户换行
      if (i == 4) {
        userHMTL += "<br/>";
        i = 0;
      }
    }

    $(".notices_box").html(userHMTL);
    $(".chrome_user").click(function(event) {
      $("#account").val($(this).data("name"));
      $("#pwd").val($(this).data("pwd"));
      $(this).css("color", "red");
      //$("#loginBt").trigger('click');
      var evt = document.createEvent('HTMLEvents');
      evt.custom = true;
      evt.initEvent('click', true, true);
      document.getElementById('loginBt').dispatchEvent(evt);
      $(".login_frame>h3").text("loading...");
    });
  }
}
initLogin();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.info == "console") {
      console.log(request.data);
    }
  }
);

//开发网临时访问
function clickTemp() {
  if ($("#tempVisit").length > 0) {
    var evt = document.createEvent('HTMLEvents');
    evt.custom = true;
    evt.initEvent('click', true, true);
    document.getElementById('tempVisit').dispatchEvent(evt);
  }
}
clickTemp();

function autoForm() {
  if ($("#ibnLogin").length > 0) {
    $("#txtLoginName").val("yinshen");
    $("#txtPassword").val("050103");
  }
}
autoForm();