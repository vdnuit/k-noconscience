const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { SerialPort } = require("serialport");

var port = 3001;

var arduinoCOMPort = "COM3";

const arduinoSerialPort = new SerialPort({
  path: arduinoCOMPort,
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
});
app.use(cors());

app.use(express.static(path.join(__dirname, "front/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/front/build/index.html"));
});
arduinoSerialPort.on("open", function () {
  console.log("Serial Port " + arduinoCOMPort + " is opened.");
  arduinoSerialPort.on("data", function (data) {
    console.log("Sensor Value : ", data[0]);
    if (data[0] == 255) {
      console.log("stole");
      app.get("/text", (req, res) => {
        res.send("stole");
      });
    } else {
      console.log("safe");
      app.get("/text", (req, res) => {
        res.send("safe");
      });
    }
  });
});
app.get("/:action", function (req, res) {
  var action = req.params.action || req.param("action");

  if (action == "led") {
    arduinoSerialPort.write("o");
    return res.send("Led light is on!");
  }
  if (action == "off") {
    arduinoSerialPort.write("f");
    return res.send("Led light is off!");
  }

  return res.send("Action: " + action);
});

app.listen(port, function () {
  console.log("Example app listening on port http://0.0.0.0:" + port + "!");
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});
