import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Film from "../../components/Film/Film";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film" element={<Film />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
