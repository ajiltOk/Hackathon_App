import FilmsCardHomePage from "../FilmCardHomePage/FilmCardHomePage";

function FavoriteFilms({ films }) {
  
  return (
    <>
      <ul>
        {films.map((film) => (
          <li className="item" key={film.kinopoiskId}>
            <FilmsCardHomePage data={film} id={film.kinopoiskId} isFavorite={true}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoriteFilms;
