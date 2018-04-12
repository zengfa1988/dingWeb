dd.config({
	agentId : _config.agentid,
	corpId : _config.corpId,
	timeStamp : _config.timeStamp,
	nonceStr : _config.nonceStr,
	signature : _config.signature,
	jsApiList : [ 'biz.util.uploadImage' ,'device.nfc.nfcRead','biz.util.open','biz.user.get']
});

dd.ready(function() {
	dd.biz.navigation.setTitle({
        title: '钉钉demo',
        onSuccess: function(data) {
        },
        onFail: function(err) {
            log.e(JSON.stringify(err));
        }
    });
});

dd.error(function(err) {
	alert('dd error: ' + JSON.stringify(err));
});

/**
 * 打开应用内页面
 */
function open(){
	dd.biz.util.open({
	    name:'contactAdd',//页面名称
	    params:{},//传参
	    onSuccess : function() {
	    	alert("ss");
	        /**/
	    },
	    onFail : function(err) {
	    	alert(err);
	    }
	});
}

function upload(){
	dd.biz.util.uploadImage({
	    compression:true,//(是否压缩，默认为true)
	    multiple: false, //是否多选，默认false
	    max: 3, //最多可选个数
	    quality: 50, // 图片压缩质量, 
	    resize: 50, // 图片缩放率
	    stickers: {   // 水印信息
	        time: "08:35",
	        dateWeather: "2016.05.06 周六·晴转多云 16℃",
	        username: "王晓",
	        address: "西湖·杭州"
	    },
	    onSuccess : function(result) {
	    	alert(result);
	        //onSuccess将在图片上传成功之后调用
	        /*
	        [
	          'http://gtms03.alicdn.com/tps/i3/TB1VF6uGFXXXXalaXXXmh5R_VXX-237-236.png'
	        ]
	        */
	    },
	    onFail : function(err) {
	    	alert(JSON.stringify(err));
	    }
	})
}

function nfcRead(){
	dd.device.nfc.nfcRead({
        onSuccess : function(data) {
        	alert(JSON.stringify(data));
         /*
        {
            content: 'alibaba-inc',
        }
        */
        },
        onFail : function(err) {
        	alert(JSON.stringify(err));
        }
	});
}

function getUser(){
	dd.biz.user.get({
        corpId:'', // 可选参数，如果不传则使用用户当前企业的corpId。
        onSuccess: function (info) {
        	alert('userGet success: ' + JSON.stringify(info));
        },
        onFail: function (err) {
        	alert('userGet fail: ' + JSON.stringify(err));
        }
    });
}

/*function aliPay(){
	dd.biz.alipay.pay({
	    info: 'xxxx', // 订单信息，
	    onSuccess: function (result) {
	    	{
	            memo: 'xxxx', // 保留参数，一般无内容
	            result: 'xxxx', // 本次操作返回的结果数据
	            resultStatus: '' // 本次操作的状态返回值，标识本次调用的结果
	        }
	    },
	    onFail: function (err) {
	 
	    }
	});
}*/