import { Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import Header from "../../components/layout/header/Header";
import * as AppData from "./AppData";
import Deliciousness from "../../components/layout/Deliciousness";
import Footer from "../../components/layout/Footer";
import DetailsPage from "../../pages/details-page/DetailsPage";

function App() {
  return (
    <Fragment>
      <Header data={AppData.layoutData} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="details"
            element={<DetailsPage />}
          />
        </Routes>
      </main>
      <Deliciousness />
      <Footer data={AppData.layoutData} />
    </Fragment>
  );
}

export default App;
