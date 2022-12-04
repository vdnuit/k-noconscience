import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Password from "../components/Password";
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
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Container>
        <Box>
          <Stopwatch />
          <h1>잠깐 자리를 비우시겠어요?</h1>
          <p>
            걱정하지 마세요!
            <br />
            소중한 노트북은 K-노양심이 지키고 있습니다.
            <br />
            노트북을 거치대 위에 올리고, 아래 버튼을 눌러주세요!
          </p>
          <button onClick={showModal}>네 다녀올게요!</button>
          {modalOpen && <Password setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Rest;
