// 메인페이지입니다 Link를 이용해 다음으로 넘어가는 버튼을 둔 것을 볼 수 있습니다.
import { Link } from "react-router-dom";
import styled from "styled-components";
import laptopImg from "../assets/laptopImg.png";
const Container = styled.div``;
const Box = styled.div``;

function Main() {
  return (
    <>
      <Container>
        <Box>
          <h2>스스로 지키는 노트북 거치대</h2>
          <h1>K-노양심</h1>
          <p>
            K-양심에만 의존할 순 없다! <br />
            [K-노양심]과 함께 소중한 노트북을 지켜보세요.
          </p>
          <Link to={{ pathname: `/question/*` }}>
            <button>자리 비우기</button>
          </Link>
          <img src={laptopImg} alt="Laptop" />
        </Box>
      </Container>
    </>
  );
}

export default Main;
