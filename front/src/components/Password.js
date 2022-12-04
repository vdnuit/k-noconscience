import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { passwordAtom } from "../atoms";

const Container = styled.div`
  width: 300px;
  height: 200px;
  z-index: 500;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: gray;
`;
const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const Button = styled.button``;

function Password({ setModalOpen }) {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [password, setPassword] = useRecoilState(passwordAtom);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const closeModal = () => {
    setPassword(text);
    console.log(password);
    navigate(`/rest/*`);
    setModalOpen(false);
  };
  return (
    <Container>
      <h1>비밀번호를 설정해주세요.</h1>
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="비밀번호"
      />
      <button onclick={closeModal}>입력</button>
    </Container>
  );
}

Password.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Password;
