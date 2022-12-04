import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Check from "../components/Check";

import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Box = styled.div``;

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
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / (60000 * 60)) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
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
      navigate(`/warning/*`);
    }
  };
  return (
    <>
      <Container>
        <Box>
          <Stopwatch />
          <h1>동안 노트북을 지키고 있습니다</h1>
          <button onClick={showModal}>저 돌아왔어요!</button>
          {modalOpen && <Check setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Rest;
