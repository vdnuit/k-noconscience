import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Check from "../components/Check";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Box = styled.div``;
function Warning() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const webSocket = new WebSocket("ws://localhost:8005");

  webSocket.onopen = function () {
    console.log("서버와 웹소켓 연결 성공!");
  };

  webSocket.onmessage = function (event) {
    console.log(event.data);
    webSocket.send("클라이언트에서 서버로 답장을 보냅니다");
    if (event.data < 253) {
      navigate(`/rest/*`);
    }
  };
  return (
    <>
      <Container>
        <Box>
          <h1>당장 노트북을 내려놓으세요! :{"<"}</h1>
          <p>
            이 노트북은 K-노양심이 지키고 있습니다.
            <br />
            주인님이 이미 알림을 받고 달려오고 있어요!
          </p>
          <button onClick={showModal}>으악 저예요</button>
          {modalOpen && <Check setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Warning;
