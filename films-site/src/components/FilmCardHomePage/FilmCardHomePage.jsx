import { Button } from "@mui/material";
import "./FilmCardHomePage.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/slices/sliceSearchById";
import { setFaforiteFilm, deleteFaforiteFilm} from "../../redux/slices/sliceFavorites";

function FilmCardHomePage({ data, id, isFavorite = false }) {
  
  let countries = "";

  data.countries.forEach((element, index) => {
    if (data.countries.length === 1) {
      countries += element.country;
    } else if (
      data.countries.length > 1 &&
      index === data.countries.length - 1
    ) {
      countries += element.country;
    } else {
      countries += element.country + ", ";
    }
  });

  let genres = "";

  data.genres.forEach((element, index) => {
    if (data.genres.length === 1) {
      genres += element.genre;
    } else if (data.genres.length > 1 && index === data.genres.length - 1) {
      genres += element.genre;
    } else {
      genres += element.genre + ", ";
    }
  });

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setId(event.target.id));
  };

  const handleClickFavorite = (event) => {
    if(isFavorite) {
      dispatch(deleteFaforiteFilm(event.target.id));
    }
    dispatch(setFaforiteFilm(data));
  };

  return (
    <>
      <div className="filmCard">
        <div>
          <img src={data.posterUrlPreview} alt="poster" />
        </div>
        <div className="filmDescription">
          <div className="firstRow">
            <div className="filmName">
              <Link className="movieTitle" to={`/home/${id}`} onClick={handleClick} id={id}>
                {data.nameRu} ({data.year})
              </Link>
              <span>{data.nameOriginal}</span>
              <button className="star" onClick={handleClickFavorite} id={id} >
                {isFavorite ? "Убрать из избранное" : "Добавить в избранное"}
              </button>
            </div>
            <Button variant="contained">
              <Link className="button" to={`/home/${id}`} onClick={handleClick} id={id}>
                Смотреть
              </Link>
            </Button>
          </div>
          <div className="secondRow">
            <div className="firstColumn">
              <span>Страна</span>
              <span>Жанр</span>
              <span>Рейтинг Кинопоиск</span>
              <span>Тип</span>
            </div>
            <div className="secondColumn">
              <span>{countries}</span>
              <span>{genres}</span>
              <span>{data.ratingKinopoisk}</span>
              <span>{data.type}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmCardHomePage;
