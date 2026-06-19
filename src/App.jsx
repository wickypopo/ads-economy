import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home/Home";
import News from "./pages/News";
import Learn from "./pages/Learn";
import Tools from "./pages/Tools";

import Header from "./sections/Header";
import PageLayout from "./components/PageLayout";
import Footer from "./sections/Footer";
import Apply from "./pages/Apply";
import Request from "./pages/Request";
import Experts from "./pages/Experts";
import Article from "./pages/Article";
import AdsOptimierung from "./pages/ads-optimierung/AdsOptimierung";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      {location.pathname === "/contact" ? null : <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads-optimierung" element={<AdsOptimierung />} />

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
              <Experts />
            </PageLayout>
          }
        />
        <Route
          path="/impressum"
          element={
            <PageLayout>
              <Impressum />
            </PageLayout>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <PageLayout>
              <Datenschutz />
            </PageLayout>
          }
        />
        <Route path="/bewerben" element={<Apply />} />
        <Route path="/anfragen" element={<Request />} />
      </Routes>
      {location.pathname === "/bewerben" ? null : <Footer />}
    </>
  );
}

export default App;
