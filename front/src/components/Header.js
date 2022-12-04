import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div``;

function Header() {
  return (
    <>
      <Container>
        <Link to={{ pathname: `/` }}>
          <h1>K-노양심</h1>
        </Link>

        <Link to={{ pathname: `/` }}>
          <button>메인 페이지</button>
        </Link>
        <Link to={{ pathname: `/question/*` }}>
          <button>자리 비우기</button>
        </Link>
      </Container>
    </>
  );
}

export default Header;
