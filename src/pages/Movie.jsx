import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error));
  }, [movieId]);
  console.log(movie)
  const movieGenres = movie.genres
  console.log(movieGenres)
  const genresList = movieGenres.map(movie => <li>{movie}</li>)
  console.log(genresList)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <span>{genresList}</span>
      </main>
    </>
  );
};

export default Movie;
