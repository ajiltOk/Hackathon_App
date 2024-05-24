import FilmsCard from "../FilmsCard/FilmsCard";
import { useGetPageCollectionsQuery } from "../../redux/filmsApi";
import "./Main.scss";
import { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

function Main() {
  const [page, setPageSite] = useState(1);

  const { data, isError, isLoading } = useGetPageCollectionsQuery(page);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error fetching data</h1>;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ul>
        {data.items.map((film) => (
          <li className="item" key={film.kinopoiskId}>
            <FilmsCard data={film} id={film.kinopoiskId} />
          </li>
        ))}
      </ul>
      <Pagination
        count={data.totalPages}
        page={page}
        onChange={(_, num) => {
          setPageSite(num);
        }}
        onClick={scrollToTop}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/home/?page=${item.page}`}
            {...item}
          />
        )}
      />
    </>
  );
}

export default Main;
