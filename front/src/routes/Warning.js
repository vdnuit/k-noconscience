import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Check from "../components/Check";
const Container = styled.div``;
const Box = styled.div``;
function Warning() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
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
