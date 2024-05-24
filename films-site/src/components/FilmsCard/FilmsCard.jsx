import { Button } from "@mui/material";
import "./FilmsCard.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/slices/sliceSearchById";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { setFaforiteFilm } from "../../redux/slices/sliceFavorites";
import { useSelector } from "react-redux";

function FilmCard({ data, id }) {
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

  const starSate = useSelector((state) => state.favoriteFilms.star);

  const [star, setStar] = useState(starSate);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setId(event.target.id));
  };

  const handleClickStar = () => {
    setStar(!star);
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
              <Link to={`/home/${id}`} onClick={handleClick} id={id}>
                {data.nameRu} ({data.year})
              </Link>
              <span>{data.nameOriginal}</span>
              <span onClick={handleClickStar}>
                {star ? <StarBorderIcon /> : <StarIcon />}
              </span>
            </div>
            <Button variant="contained">Смотреть</Button>
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

export default FilmCard;
