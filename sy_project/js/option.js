$('.dropdown-toggle').dropdown();
$(".drop_b").click(function(event) {
	$("#branch").text($(this).text());
});

$("#svn_create_bt").click(function(event) {
	if ($("#svn_creat_name").val() == "") {
		$('#branch_modal').modal('show')
	}else{
		$.ajax({
			url: "http://node.yinshen.com:8080/svn?action=create&type=mp&name="+$("#svn_creat_name").val(),
			type: "get",
			dataType: "json"
		}).done(function(json) {
			console.log(json);
			if (json.ret == 0) {
				$("#branch_m_text").text("创建分支成功")
			} else if (json.ret == 1) {
				$("#branch_m_text").text("分支已存在")
			} else {
				$("#branch_m_text").text("创建失败")
			}
			$('#branch_modal').modal('show');
		});		
	}
	return;

});

$("#branch_m_ok").click(function(event) {
	$('#branch_modal').modal('hide')
});

