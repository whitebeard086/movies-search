import { useState, useEffect } from "react";
import Search from "../Search/Search";
import {
  Container,
  Image,
  ImageContainer,
  MoviesContainer,
  DisplayMovies,
  Text,
  Title,
} from "./styles";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Game of thrones");

  useEffect(() => {
    const getMovies = async search => {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=cc2be3e0`;

      const res = await fetch(url);
      

      const data = await res.json();
      setMovies(data.Search);
    };

    getMovies(search);
  }, [search]);

  return (
    <Container>
      <Search search={search} setSearch={setSearch} />
      <Text>Movies:</Text>
      <DisplayMovies>
          {movies?.map(movie => (
            <MoviesContainer key={movie.imdbID}>
              <ImageContainer>
                <Image src={movie.Poster} alt={movie.Title} />
              </ImageContainer>
              <Title>{movie.Title}</Title>
            </MoviesContainer>
          ))}
      </DisplayMovies>
    </Container>
  );
};
export default Movies;
