import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { passwordAtom } from "../atoms";
import modalButton from "../assets/modalButton.png";
const Container = styled.div`
  background: #161a42;
  box-shadow: 0px 13px 17px rgba(140, 213, 105, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 3px solid #075985;
  width: 300px;
  height: 200px;
  z-index: 500;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h3 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 54px;
    text-align: center;

    /* Greys/Blue Grey/300 */

    color: #f9fafb;
  }
  input {
    padding: 1vh 0.5vw;
    font-size: 2vh;
    margin: 0vh 3vw;
    font-family: "Inter";
    border: 1px solid #075985;
    border-radius: 1vh;
  }
  img {
    margin: 3vh 6vw;
    width: 100px;
  }
`;
function Check({ setModalOpen }) {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [password, setPassword] = useRecoilState(passwordAtom);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const closeModal = () => {
    if (text == password) {
      console.log(text);
      console.log(password);

      navigate(`/welcome/*`);
      setModalOpen(false);
    } else {
      navigate(`/warning/*`);
    }
  };
  return (
    <Container>
      <h3>비밀번호를 입력해주세요</h3>
      <input
        type="password"
        onChange={onChange}
        value={text}
        placeholder="비밀번호"
      />
      <img src={modalButton} onClick={closeModal} />
    </Container>
  );
}

Check.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Check;
