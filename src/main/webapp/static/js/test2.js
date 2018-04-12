
dd.ready(function(){
});

/**
 * 输入框
 */
function showPlain(){
	dd.ui.input.plain({
	    placeholder: '说点什么吧', //占位符
	    text: '', //默认填充文本
	    onSuccess: function(data) {
	        //onSuccess将在点击发送之后调用
	        /*{
	            text: String
	        }*/
	    },
	    onFail: function() {
	    	alert(111);
	    }
	})
}

function scan(){
	dd.biz.util.scan({
	    type: 'all' , // type 为 all、qrCode、barCode，默认是all。
	    onSuccess: function(data) {
	    	alert(JSON.stringify(data));
	    //onSuccess将在扫码成功之后回调
	      /* data结构
	        { 'text': String}
	      */
	    },
	   onFail : function(err) {
		   alert(JSON.stringify(err));
	   }
	})
}

function openLink(){
	dd.biz.util.openLink({
	    url: "http://www.dingtalk.com",//要打开链接的地址
	    onSuccess : function(result) {
	        /**/
	    },
	    onFail : function(err) {}
	})
}

function getAuthCode(){
	dd.runtime.permission.requestAuthCode({
	    corpId: "ding3f28f1f5ccc43cd835c2f4657eb6378f",
	    onSuccess: function(result) {
	    	alert(JSON.stringify(result));
	    /*{
	        code: 'hYLK98jkf0m' //string authCode
	    }*/
	    },
	    onFail : function(err) {
	    	alert(JSON.stringify(err));
	    }
	 
	})
}