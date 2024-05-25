import FilmCard from "../FilmCard/FilmCard";
import { useGetFilmByIdQuery } from "../../redux/filmsApi";
import { useSelector } from "react-redux";

function Film() {
  const id = useSelector((state) => state.id.id);

  const { data, isError, isLoading } = useGetFilmByIdQuery(id);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error fetching data</h1>;

  return <FilmCard data={data} />;
}

export default Film;
