<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    String urlString = request.getParameter("signedUrl");
	String queryString = null;
	if(urlString == null || "".equals(urlString)){
		urlString = request.getRequestURL().toString();
		queryString = request.getQueryString();
	}
	String configStr = com.dingHelper.auth.AuthHelper.getConfig(urlString, queryString, net.bolue.dt.util.DDConfig.CORP_ID, net.bolue.dt.util.DDConfig.CORP_SECRET);
	System.out.println(configStr);
    
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../static/js/jquery.min.js"></script>
	<script type="text/javascript" src="http://g.alicdn.com/dingding/open-develop/1.9.0/dingtalk.js"></script>
<script type="text/javascript">
//在此拿到jsAPI权限验证配置所需要的信息
var _config = <%= configStr %>;
</script>
	<script type="text/javascript" src="../static/js/test3.js"></script>
</head>
<body>
<h1><a href="javascript:open();">打开应用内页面</a></h1>
	<h1><a href="javascript:upload();">上传</a></h1>
	<h1><a href="javascript:nfcRead();">读取NFC芯片内容</a></h1>
	<h1><a href="javascript:getUser();">获取用户信息</a></h1>
</body>
</html>