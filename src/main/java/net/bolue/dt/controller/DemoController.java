package net.bolue.dt.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.dingHelper.auth.AuthHelper;

import net.bolue.dt.util.DDConfig;

@Controller
public class DemoController {

	@RequestMapping(value = "/getConfig")
	@ResponseBody
	public Map<String,Object> getConfig(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String urlString = request.getParameter("signedUrl");
		String queryString = null;
		if(urlString == null || "".equals(urlString)){
			urlString = request.getRequestURL().toString();
			queryString = request.getQueryString();
		}
		String configStr = AuthHelper.getConfig(urlString, queryString, DDConfig.CORP_ID, DDConfig.CORP_SECRET);
		System.out.println(configStr);
		Map<String,Object> configMap = JSONObject.parseObject(configStr, Map.class);
//		Map<String,Object> configMap = AuthHelper.getConfigMap(request);
		return configMap;
	}
	
	/*
	@RequestMapping(value = "/OAoauth")
	public void oAoauth(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String code = request.getParameter("code");
		if(code != null){
			try {
				String ssoToken = AuthHelper.getSsoToken();
				response.getWriter().append(ssoToken);
				JSONObject js = UserHelper.getAgentUserInfo(ssoToken, code);
				response.getWriter().append(js.toString());
			} catch (OApiException e) {
				e.printStackTrace();
			}
		}else{
		    // 免登成功后会跳转到redirect_url
			String reurl = "https://oa.dingtalk.com/omp/api/micro_app/admin/landing?corpid=" + 
			Env.CORP_ID + "&redirect_url=" + Env.OA_BACKGROUND_URL;//配置的OA后台地址
			response.addHeader("location", reurl);
			response.setStatus(302);
		}
	}
	
	@RequestMapping(value = "/userinfo")
	public void userinfo(HttpServletRequest request,HttpServletResponse response) throws IOException {
		 // 获取免登授权码
        String code = request.getParameter("code");
        String corpId = request.getParameter("corpid");
        System.out.println("authCode:" + code + " corpid:" + corpId);
        try {
            response.setContentType("text/html; charset=utf-8");

            String accessToken = AuthHelper.getAccessToken();
            System.out.println("access token:" + accessToken);
            CorpUserDetail user = UserHelper.getUser(accessToken, UserHelper.getUserInfo(accessToken, code).getUserid());

            String userJson = JSON.toJSONString(user);
            response.getWriter().append(userJson);
            System.out.println("userjson:" + userJson);
        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().append(e.getMessage());
        }
	}
	*/
}
