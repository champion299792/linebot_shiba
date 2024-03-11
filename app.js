const express = require("express");
const axios = require("axios");
// const FormData = require("form-data");
const linebot = require("linebot");

//配置
const PORT = 3000;
const app = express();

//line bot
const bot = linebot({
	channelId: "2004032391",
	channelSecret: "92090978ece68784b62265577c4c961c",
	channelAccessToken:
		"F7MukU7XXzGEgJJ/R9lyXv9u9US8TkLqehTsPHai9a5Fq2N95L44MUWJjv9Rt1NHTgtqrb/EKh97zKSvciy+r3m8kSYfe2OtgSn0+Lu3mDVEzBuwhH5pRFFKASoyzNH3GmX3BtYGuCEzoJpr7BhUMgdB04t89/1O/w1cDnyilFU=",
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
			.reply(["已經收到您的請求。", "嗷嗚嗚"])
			.then(function (data) {
				// 當訊息成功回傳後的處理
			})
			.catch(function (error) {
				// 當訊息回傳失敗後的處理
				console.log(error);
			});
	} else {
		event
			.reply(["嗷嗷", "嗷嗚嗚嗚嗚"])
			.then(function (data) {
				// 當訊息成功回傳後的處理
			})
			.catch(function (error) {
				// 當訊息回傳失敗後的處理
				console.log(error);
			});
	}
});

app.get("/", async (req, res) => {
	res.send("open 10008");
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
