import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Check from "../components/Check";
import Hourglass from "../assets/Hourglass.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #0b0d21;
  padding: 0vh 20vw;
  min-height: 800px;
`;
const Box = styled.div`
  text-align: center;
  background: linear-gradient(
    162.34deg,
    #161a42 22.61%,
    rgba(22, 26, 66, 0) 118.29%
  );
  /* Colors/Light Blue/800 */

  border: 3px solid #075985;
  border-radius: 16px;
  h1 {
    margin: 50px 0px 30px 0px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 76px;
    /* or 146% */

    text-align: center;

    color: #ffffff;
  }
  p {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 27px;
    /* or 133% */

    text-align: center;

    color: #d2d2d2;
  }
  h2 {
    margin: 70px 300px;
    padding: 20px;
    background: #161a42;
    border-radius: 12px;

    border: 3px solid #075985;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 30px;
    text-align: center;

    /* Greys/Blue Grey/300 */

    color: #f9fafb;
  }
`;
const Styledwatch = styled.div`
  font-family: "Inter";
  margin-top: 10vh;
  font-size: 72px;
  background: linear-gradient(90deg, #1fa3ff 0%, #a5ffcb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  img {
    margin-bottom: -50px;
  }
`;
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <Styledwatch className="stopwatch">
      <div className="numbers">
        <img src={Hourglass} />
        <span>{("0" + Math.floor((time / (60000 * 60)) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </Styledwatch>
  );
};

function Rest() {
  const navigate = useNavigate();
  const [isSafe, setIsSafe] = useState(true);

  useEffect(() => {
    const connect = setInterval(() => {}, 1000);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const webSocket = new WebSocket("ws://localhost:8005");

  // 서버에서 wss.on('connection' 이 성공적으로 되면, 이벤트 실행
  webSocket.onopen = function () {
    console.log("서버와 웹소켓 연결 성공!");
  };

  // 사실상 .onmessage 와 .send 로 메세지 통신을 하게 되는 것이다
  webSocket.onmessage = function (event) {
    console.log(event.data);
    webSocket.send("클라이언트에서 서버로 답장을 보냅니다"); // 서버로부터 메세지 받으면 바로 서버로 메세지 보냄
    if (event.data >= 253) {
      webSocket.close();
      navigate(`/warning/*`);
    }
  };
  return (
    <>
      <Container>
        <Box>
          <Stopwatch />
          <h1>동안 노트북을 지키고 있습니다</h1>
          <h2 onClick={showModal}>저 돌아왔어요!</h2>
          {modalOpen && <Check setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Rest;
