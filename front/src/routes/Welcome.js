import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Password from "../components/Password";
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
function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Container>
        <Box>
          <h1>돌아오신 것을 환영합니다!</h1>
          <p>
            노트북이 무사해서 다행이예요!
            <br />
            다시 노트북을 맡기시겠어요?
          </p>
          <h2 onClick={showModal}>부탁할게요!</h2>
          {modalOpen && <Password setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Welcome;
