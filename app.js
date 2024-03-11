const express = require("express");
const axios = require("axios");
// const FormData = require("form-data");
const linebot = require("linebot");

//配置
const PORT = 3000;
const app = express();

//line bot
const bot = linebot({
	channelId: "2004027524",
	channelSecret: "9de54acc1abb742144fe4d7d6582ce82",
	channelAccessToken:
		"Xwj/Hv3jVAfd9W9Rnw4aL7XJq2mg3F6Db8W+bvX7bOQkGb6XnZpqKVN6zOd1A/loELo1sMkHyj7VaOCs9zIMiDHsgSgDgj2WwQeRmMThwj0G26tjJIk0ijgCVW0aobb1Mbjn/DW4rb/v39kmciTYEgdB04t89/1O/w1cDnyilFU=",
});
const linebotParser = bot.parser();
app.post("/linewebhook", linebotParser);

//notification
bot.on("message", async function (event) {
	// event.message.text是使用者傳給bot的訊息
	// 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
	const text = event.message.text.split("\n");
	if (text[0] === "warn") {
		event
			.reply(['已經收到您的請求。','嗷嗚嗚'])
			.then(function (data) {
				// 當訊息成功回傳後的處理
			})
			.catch(function (error) {
				// 當訊息回傳失敗後的處理
				console.log(error)
			});
	}else{
		event
			.reply(['嗷嗷','嗷嗚嗚嗚嗚'])
			.then(function (data) {
				// 當訊息成功回傳後的處理
			})
			.catch(function (error) {
				// 當訊息回傳失敗後的處理
				console.log(error)
			});
	}
});

app.get("/", async (req, res) => {
	res.send("open 10008");
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
