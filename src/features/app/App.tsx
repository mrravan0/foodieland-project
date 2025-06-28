import { Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import Header from "../../components/layout/header/Header";
import * as AppData from "./AppData";
import Deliciousness from "../../components/layout/Deliciousness";

function App() {
  return (
    <Fragment>
      <Header data={AppData.layoutData} />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
      <Deliciousness />
    </Fragment>
  );
}

export default App;
