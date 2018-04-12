package net.bolue.dt.util;

import java.util.HashMap;
import java.util.Map;

import com.dingHelper.OApiException;
import com.dingHelper.utils.HttpHelper;

/**
 * 机器人
 * @author Administrator
 *
 */
public class Robot {

	public static void main(String[] args) {
		String webhookUrl = "https://oapi.dingtalk.com/robot/send?access_token=6c464e0dfbb191b66ca5b2104903b7a2c3b940551008b38726e04d08ebce990a";
		Map<String,Object> data = new HashMap<String,Object>();
		data.put("msgtype", "text");
		Map<String,Object> textMap = new HashMap<String,Object>();
		textMap.put("content", "我就是我, 是不一样的烟火");
		data.put("text", textMap);
		try {
			HttpHelper.httpPost(webhookUrl, data);
		} catch (OApiException e) {
			e.printStackTrace();
		}
	}
}
