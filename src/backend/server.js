import express from "express";

const port = Number(process.env.PORT || 3000);
const app = express();
const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.use(express.static("public"));

app.get("/person/:value", (req, res) => {
	const returnValue = {
		val1: getRandomInt(1, 10),
		val2: getRandomInt(1, 10)
	};
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify(returnValue));
});

app.get("/facility/:value", (req, res) => {
	const returnValue = {
		val3: getRandomInt(1, 10),
		val4: getRandomInt(1, 10)
	};
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify(returnValue));
});

app.get("/exposure/:value", (req, res) => {
	const returnValue = {
		val5: getRandomInt(1, 10)
	};
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify(returnValue));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
