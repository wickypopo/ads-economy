import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import RisingBrands from "./pages/RisingBrands";
import PremiereBrands from "./pages/PremiereBrands";
import News from "./pages/News";
import Learn from "./pages/Learn";
import Tools from "./pages/Tools";

import Header from "./sections/Header";
import PageLayout from "./components/PageLayout";
import Footer from "./sections/Footer";
import RisingContact from "./pages/RisingContact";
import Professionals from "./pages/Professionals";
import Article from "./pages/Article";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      {location.pathname === "/contact" ? null : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/rising-brands"
          element={
            <PageLayout>
              <RisingBrands />
            </PageLayout>
          }
        />
        <Route
          path="/premier-brands"
          element={
            <PageLayout>
              <PremiereBrands />
            </PageLayout>
          }
        />
        <Route
          path="/news"
          element={
            <PageLayout>
              <News />
            </PageLayout>
          }
        />
        <Route path="/news/:article" element={<Article />} />
        <Route
          path="/learn"
          element={
            <PageLayout>
              <Learn />
            </PageLayout>
          }
        />
        <Route
          path="/tools"
          element={
            <PageLayout>
              <Tools />
            </PageLayout>
          }
        />
        <Route
          path="/experts"
          element={
            <PageLayout>
              <Professionals />
            </PageLayout>
          }
        />
        <Route path="/contact" element={<RisingContact />} />
      </Routes>
      {location.pathname === "/contact" ? null : <Footer />}
    </>
  );
}

export default App;
