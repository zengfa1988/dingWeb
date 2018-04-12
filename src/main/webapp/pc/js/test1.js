
dd.ready(function(){
});

function showVersion(){
	var version = DingTalkPC.version;
	alert(version);
}

function alert(msg){
	DingTalkPC.device.notification.alert({
	    message: msg,
	    title: "",//可传空
	    buttonName: "确认",
	    onSuccess : function() {
	        //onSuccess将在点击button之后回调
	        /*回调*/
	    },
	    onFail : function(err) {}
	});
}

function showAlert(){
	DingTalkPC.device.notification.alert({
	    message: "亲爱的",
	    title: "提示",//可传空
	    buttonName: "收到",
	    onSuccess : function() {
	    	alert("确认");
	        //onSuccess将在点击button之后回调
	        /*回调*/
	    },
	    onFail : function(err) {}
	});
}

function showConfirm(){
	DingTalkPC.device.notification.confirm({
	    message: "你爱我吗",
	    title: "提示",
	    buttonLabels: ['爱', '不爱'],
	    onSuccess : function(result) {
	    	alert(result.buttonIndex);
	        //onSuccess将在点击button之后回调
	        /*
	        {
	            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
	        }
	        */
	    },
	    onFail : function(err) {}
	});
}

function showPrompt(){
	DingTalkPC.device.notification.prompt({
	    message: "再说一遍？",
	    title: "",
	    defaultText:"默认提示",
	    buttonLabels: ['继续', '不玩了'],
	    onSuccess : function(result) {
	    	alert(result.buttonIndex+"|"+result.value);
	        //onSuccess将在点击button之后回调
	        /*
	        {
	            buttonIndex: 0, //被点击按钮的索引值，Number类型，从0开始
	            value: '' //输入的值
	        }
	        */
	    },
	    onFail : function(err) {}
	});
}

/**
 * 震动
 */
function vibrate(){
	dd.device.notification.vibrate({
	    duration: 300, //震动时间，android可配置 iOS忽略
	    onSuccess : function(result) {
	        /*
	        {}
	        */
	    },
	    onFail : function(err) {}
	})
}

/**
 * 显示浮层
 */
function showPreloader(){
	dd.device.notification.showPreloader({
	    text: "使劲加载中..", //loading显示的字符，空表示不显示文字
	    showIcon: true, //是否显示icon，默认true
	    onSuccess : function(result) {
	        /*{}*/
	    },
	    onFail : function(err) {}
	})
}

/**
 * 隐藏浮层
 */
function hidePreloader(){
	dd.device.notification.hidePreloader({
	    onSuccess : function(result) {
	        /*{}*/
	    },
	    onFail : function(err) {}
	})
}

function toast(){
	dd.device.notification.toast({
	    icon: '', //icon样式，有success和error，默认为空 0.0.2
	    text: '提交成功', //提示信息
	    duration: 2, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
	    delay: 2, //延迟显示，单位秒，默认0
	    onSuccess : function(result) {
	        /*{}*/
	    },
	    onFail : function(err) {}
	})
}

/**
 * 单选列表
 */
function showActionsheet(){
	dd.device.notification.actionSheet({
	    title: "谁是最棒哒？", //标题
	    cancelButton: '取消', //取消按钮文本
	    otherButtons: ["孙悟空","猪八戒","唐僧","沙和尚"],
	    onSuccess : function(result) {
	    	alert(result.buttonIndex);
	        //onSuccess将在点击button之后回调
	        /*{
	            buttonIndex: 0 //被点击按钮的索引值，Number，从0开始, 取消按钮为-1
	        }*/
	    },
	    onFail : function(err) {}
	})
}

/**
 * modal弹浮层
 */
function showModal(){
	dd.device.notification.modal({
	    image:"http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg", // 标题图片地址
	    banner:["http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg"],   // 图片地址列表
	    title:"2.4版本更新", //标题
	    content:"1.功能更新2.功能更新;", //文本内容
	    buttonLabels:["了解更多","知道了"],// 最多两个按钮，至少有一个按钮。
	    onSuccess : function(result) {
	        //onSuccess将在点击button之后回调
	        /*{
	            buttonIndex: 0 //被点击按钮的索引值，Number，从0开始
	        }*/
	    },
	    onFail : function(err) {}
	})
}

/**
 * 多选组件
 */
function showMultiSelect(){
	dd.biz.util.multiSelect({
	    options:['选项1', '选项2', '选项3', '选项4'],
	    selectOption:['选项3'],
	    onSuccess : function(result) {
	        /* 返回用户选中的index数组，从0开始。 例如
	             [ 2, 3 ]
	        */
	    },
	    onFail : function() {}
	})
}

/**
 * 设置导航栏标题
 */
function setTitle(){
	dd.biz.navigation.setTitle({
	    title : '邮箱正文',//控制标题文本，空字符串表示显示默认文本
	    onSuccess : function(result) {
	        /*结构
	        {
	        }*/
	    },
	    onFail : function(err) {}
	});
}

function close(){
	dd.biz.navigation.close({
	    onSuccess : function(result) {
	        /*result结构
	        {}
	        */
	    },
	    onFail : function(err) {}
	})
}

function goBack(){
	dd.biz.navigation.goBack({
	    onSuccess : function(result) {
	        /*result结构
	        {}
	        */
	    },
	    onFail : function(err) {}
	})
}

function setRightMenu(){
	dd.biz.navigation.setRight({
	    show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
	    control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
	    text: '发送',//控制显示文本，空字符串表示显示默认文本
	    onSuccess : function(result) {
	        //如果control为true，则onSuccess将在发生按钮点击事件被回调
	        /*
	        {}
	        */
	    },
	    onFail : function(err) {}
	});
}

function setMenu(){
	dd.biz.navigation.setMenu({
        backgroundColor : "#ADD8E6",
        textColor : "#ADD8E611",
        items : [
            {
                "id":"1",//字符串
            "iconId":"file",//字符串，图标命名
              "text":"帮助"
            },
            {
                "id":"2",
            "iconId":"photo",
              "text":"dierge"
            },
            {
                "id":"3",
            "iconId":"setting",
              "text":"disange",
            },
            {
                "id":"4",
            "iconId":"time",
              "text":"disige"
            }
        ],
        onSuccess: function(data) {
        /*
        {"id":"1"}
        */
        },
        onFail: function(err) {
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

