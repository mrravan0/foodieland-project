import { Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/layout/header/Header";
import Deliciousness from "../components/layout/Deliciousness";
import Footer from "../components/layout/Footer";
import DetailsPage from "../pages/DetailsPage";
import BlogPage from "../pages/BlogPage";
import * as LayoutData from "../fake-data/layout-data/LayoutData";

function App() {
  return (
    <Fragment>
      <Header data={LayoutData.layoutData} />
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
          <Route
            path="blog"
            element={<BlogPage />}
          />
        </Routes>
      </main>
      <Deliciousness />
      <Footer data={LayoutData.layoutData} />
    </Fragment>
  );
}

export default App;
