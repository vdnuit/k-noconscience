import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Question from "./routes/Question";
import Rest from "./routes/Rest";
import Warning from "./routes/Warning";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} errorElement={<Main />}></Route>
        <Route
          path="/question/*"
          element={<Question />}
          errorElement={<Main />}
        ></Route>
        <Route
          path="/rest/*"
          element={<Rest />}
          errorElement={<Main />}
        ></Route>
        <Route
          path="/warning/*"
          element={<Warning />}
          errorElement={<Main />}
        ></Route>
        <Route path={"*"} component={Main} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
