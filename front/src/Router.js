import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import Main from "./routes/Main";
import Question from "./routes/Question";
import Rest from "./routes/Rest";
import Warning from "./routes/Warning";
import Welcome from "./routes/Welcome";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<MainLayout />}>
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
            path="/welcome/*"
            element={<Welcome />}
            errorElement={<Main />}
          ></Route>
          <Route path={"*"} component={Main} />
        </Route>

        <Route
          path="/warning/*"
          element={<Warning />}
          errorElement={<Main />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
