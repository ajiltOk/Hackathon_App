import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Film from "../../components/Film/Film";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteFilms from "../../components/FavoriteFilms/FavoriteFilms";

function Home() {
  const id = useSelector((state) => state.id.id);

  const films = useSelector((state) => state.favoriteFilms.favoritPage);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={`/${id}`} element={<Film />} />
        <Route path="/faforites" element={<FavoriteFilms films={films} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
