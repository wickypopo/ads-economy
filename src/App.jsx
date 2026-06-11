import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Toaster />
      <Header />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
