import { Button } from "@mui/material";
import "./FilmCard.scss";

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
              <span>Продолжительность</span>
              <span>Рейтинг Кинопоиск</span>
              {data.ratingFilmCritics && <span>Рейтинг кинокритиков</span>}
              {data.slogan && <span>Слоган</span>}
              {data.ratingAgeLimits && <span>Возрастное ограничение</span>}
              <span>Описание</span>
            </div>
            <div className="secondColumn">
              <span>{countries}</span>
              <span>{genres}</span>
              <span>{data.filmLength} минут</span>
              <span>{data.ratingKinopoisk}</span>
              {data.ratingFilmCritics && <span>{data.ratingFilmCritics}</span>}
              {data.slogan && <span>{data.slogan}</span>}
              {data.ratingAgeLimits && (
                <span>{data.ratingAgeLimits.substr(3)}+ </span>
              )}
              <span>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmCard;
