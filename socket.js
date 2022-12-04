const WebSocket = require("ws");

const { SerialPort } = require("serialport");

module.exports = (server) => {
  var num = 0;
  const arduinoCOMPort = "COM3";
  const arduinoSerialPort = new SerialPort({
    path: arduinoCOMPort,
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
  });

  arduinoSerialPort.on("open", function () {
    console.log("Serial Port " + arduinoCOMPort + " is opened.");
    arduinoSerialPort.on("data", function (data) {
      console.log("Sensor Value : ", data[0]);
      console.log("missing");
      num = data[0];
    });
  });
  //? express 서버와 웹소켓 서버를 연결 시킨다.
  // 변수이름은 wss(web socket server)
  const wss = new WebSocket.Server({ server });

  //* 프론트에서 new WebSocket("ws://localhost:8005") 보냈을때, 웹소켓 연결 실행
  wss.on("connection", (ws, req) => {
    //* ip 파악
    // req.headers['x-forwarded-for'] : 프록시 서버를 경유할때 ip가 변조될수 있다. 이를 감지하고 본ip파악해줄 수 있다.
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속 ip : ", ip);

    //* 클라이언트로부터 온 메시지
    ws.on("message", (message) => {
      console.log(message.toString());
    });

    //* 에러 시
    ws.on("error", (error) => {
      console.error(error);
    });

    //* 연결 종료 시 (유저가 채팅방을 나간다거나)
    ws.on("close", () => {
      console.log("클라이언트 접속 해제", ip);
      clearInterval(ws.interval); // 연결 끊기면 setInterval 중지
    });

    ws.interval = setInterval(() => {
      //! 웹소켓은 비동기이기 때문에 삑 날 수 있어, 웹소켓이 클라이언트랑 연결이 되었는지 검사하는 안전 장치
      if (ws.readyState !== ws.OPEN) {
        return;
      }

      ws.send(num);
    }, 1000);
  });
};
