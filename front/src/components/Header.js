import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  background-color: #0b0d21;
  padding: 3vw;
`;
const Box = styled.div`
  justify-content: space-between;
  background: linear-gradient(
    162.34deg,
    #161a42 22.61%,
    rgba(22, 26, 66, 0) 118.29%
  );
  border: 3px solid #161a42;
  border-radius: 16px;
  display: flex;
  h1 {
    padding: 1vh 4vw;
    padding-top: 2vh;
    color: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 36px;
    border-radius: 6px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: none;
`;
const Buttons = styled.div`
  display: flex;

  p {
    margin: 1vh 1.5vw;
    margin-top: 2vh;
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    line-height: 36px;
    color: #ffffff;
    background-color: none;
  }
`;
function Header() {
  return (
    <>
      <Container>
        <Box>
          <StyledLink to={{ pathname: `/` }}>
            <h1>K-노양심</h1>
          </StyledLink>
          <Buttons>
            <StyledLink to={{ pathname: `/` }}>
              <p>메인 페이지</p>
            </StyledLink>
            <StyledLink to={{ pathname: `/question/*` }}>
              <p>자리 비우기</p>
            </StyledLink>
          </Buttons>
        </Box>
      </Container>
    </>
  );
}

export default Header;
