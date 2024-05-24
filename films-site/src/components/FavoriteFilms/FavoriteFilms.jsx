import FilmsCard from "../FilmsCard/FilmsCard";

function FavoriteFilms({ films }) {
  return (
    <>
      <ul>
        {films.map((film) => (
          <li className="item" key={film.kinopoiskId}>
            <FilmsCard data={film} id={film.kinopoiskId} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FavoriteFilms;
