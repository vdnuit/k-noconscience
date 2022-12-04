const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { SerialPort } = require("serialport");
const webSocket = require("./socket");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
// var email = require("emailjs");

// var servere = email.servere.connect({
//   user: "voldenuitv@gmail.com",
//   password: "montaigne11",
//   host: "smtp.gmail.com",
//   ssl: true,
// });

// servere.send(
//   {
//     text: "Hey howdy",
//     from: "NodeJS",
//     to: "Wilson <wilson.balderrama@gmail.com>",
//     cc: "",
//     subject: "Greetings",
//   },
//   function (err, message) {
//     console.log(err || message);
//   }
// );
dotenv.config();

app.set("port", process.env.PORT || 8005);
app.set("view engine", "njk");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "front/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/front/build/index.html"));
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123123"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "123123",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

const server = app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

//? express 서버와 웹소켓 서버를 연결 시킨다.
webSocket(server);
app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});
