import FilmsCard from "../FilmsCard/FilmsCard";
import { useGetFilmsCollectionsQuery } from "../../redux/filmsApi";
import "./Main.scss";

function Main() {
  const { data, isError, isLoading } = useGetFilmsCollectionsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error fetching data</h1>;

  return (
    <>
      <ul>
        {data.items.map((film) => (
          <li className="item" key={film.kinopoiskId}>
            <FilmsCard data={film} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
