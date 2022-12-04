import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import Helmet from "react-helmet";
import InterTTF from "./assets/Inter.ttf";

import laptopImg from "./assets/laptopImg.png";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>K-노양심</title>
        <meta
          name="description"
          content="노트북을 지키는 노트북 거치대 <K-노양심>입니다!"
        />

        <link rel="icon" href={laptopImg} />
      </Helmet>
      <Router />
      <GlobalStyle />
    </div>
  );
}
const GlobalStyle = createGlobalStyle`
  ${reset}
  // font import
  
  @font-face {
    font-family: 'Inter';
    src: local('Inter'), local('Inter');
    font-style: normal;
    src: url(${InterTTF}) format('truetype');
}
 `;
export default App;
