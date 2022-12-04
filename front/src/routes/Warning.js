import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Check from "../components/Check";
import { useNavigate } from "react-router-dom";
import { init, send } from "emailjs-com";
import { useRecoilState } from "recoil";
import { passwordAtom } from "../atoms";

const Container = styled.div`
  background-color: #210b0b;

  padding: 16vh 20vw;
  min-height: 750px;
`;
const Box = styled.div`
  text-align: center;
  background: linear-gradient(
    162.34deg,
    #5b0e0e 22.61%,
    rgba(22, 26, 66, 0) 118.29%
  );
  /* Colors/Rose/700 */

  border: 3px solid #be123c;
  border-radius: 16px;
  h1 {
    margin: 100px 0px 30px 0px;
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
    background: #5b0e0e;
    /* Colors/Red/700 */

    border: 2px solid #b91c1c;
    border-radius: 12px;

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
function Warning() {
  const password = useRecoilState(passwordAtom);
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };
  let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;
  useEffect(() => {
    init("QaGjvx3ID9Wyk_ygt");
    send("gmail", "template_u498gz9", {
      username: "이용자",
      time: timestring,
      password: password,
    });
  }, []);

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
      webSocket.close();
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
          <h2 onClick={showModal}>으악 저예요</h2>
          {modalOpen && <Check setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Warning;
