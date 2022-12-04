import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Password from "../components/Password";
const Container = styled.div``;
const Box = styled.div``;
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
          <button onClick={showModal}>부탁할게요!</button>
          {modalOpen && <Password setModalOpen={setModalOpen} />}{" "}
        </Box>
      </Container>
    </>
  );
}
export default Welcome;
