import { Button } from "@mui/material";
import "./FilmsCard.scss";

function FilmCard({ data }) {
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

  return (
    <>
      <div className="filmCard">
        <div>
          <img src={data.posterUrlPreview} alt="poster" />
        </div>
        <div className="filmDescription">
          <div className="firstRow">
            <div className="filmName">
              <span>
                {data.nameRu} ({data.year})
              </span>
              <span>{data.nameOriginal}</span>
            </div>
            <Button variant="contained">Смотреть</Button>
          </div>
          <div className="secondRow">
            <div className="firstColumn">
              <span>Страна</span>
              <span>Жанр</span>
              {/*<span>Продолжительность</span>*/}
              <span>Рейтинг Кинопоиск</span>
              <span>Тип</span>
            </div>
            <div className="secondColumn">
              <span>{countries}</span>
              <span>{genres}</span>
              {/*<span>{data.filmLength} минут</span>*/}
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
