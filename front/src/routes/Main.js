import { Link } from "react-router-dom";
import styled from "styled-components";
import laptopImg from "../assets/laptopImg.png";
import startButton from "../assets/startButton.png";
const Container = styled.div`
  background-color: #0b0d21;
  padding: 6vh 6vw;
  min-height: 300px;
`;
const Box = styled.div`
  display: flex;

  background: linear-gradient(
    162.34deg,
    #161a42 22.61%,
    rgba(22, 26, 66, 0) 118.29%
  );
  border: 3px solid #075985;
  border-radius: 16px;
`;
const Text = styled.div`
  padding: 16vh 6vw;
  h2 {
    letter-spacing: -3px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 150%;
    margin-bottom: 2vh;
    color: #fafafb;
  }
  h1 {
    letter-spacing: -3px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;

    margin-bottom: 6vh;
    line-height: 100%;

    color: #fafafb;
  }
  p {
    letter-spacing: -2px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 130%;

    margin-bottom: 4vh;
    color: #d2d2d2;
  }
`;
const Laptop = styled.img`
  width: 800px;
  margin-bottom: -30vh;
  margin-right: -6vw;
`;
function Main() {
  return (
    <>
      <Container>
        <Box>
          <Text>
            <h2>스스로 지키는 노트북 거치대</h2>
            <h1>K-노양심</h1>
            <p>
              K-양심에만 의존할 순 없다! <br />
              {"<"}K-노양심{">"}과 함께 소중한 노트북을 지켜보세요.
            </p>
            <Link to={{ pathname: `/question/*` }}>
              <img src={startButton} alt="Laptop" />
            </Link>
          </Text>

          <Laptop src={laptopImg} alt="Laptop" />
        </Box>
      </Container>
      <Container />
    </>
  );
}

export default Main;
