import { InputBase, styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef, useEffect } from "react";
import { useGetFilmsByKeywordQuery } from "../../redux/filmsApi";
import "./Search.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId } from "../../redux/slices/sliceSearchById";

function SearchInput() {
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleClick = (event) => {
    dispatch(setId(event.target.id));
    setIsActive(false);
    setKeyword("");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const { data = [] } = useGetFilmsByKeywordQuery(keyword);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="searchBox">
      <div className="search">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            type="text"
            placeholder="Search…"
            value={keyword}
            inputRef={inputRef}
            onChange={handleChange}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {isActive && (
          <ul className="dropdown" onClick={handleClick}>
            {data != "" &&
              data.films.map((film) => (
                <li className="listItem" key={film.filmId}>
                  <NavLink to="/home/film" id={film.filmId}>
                    {film.nameRu}
                  </NavLink>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
