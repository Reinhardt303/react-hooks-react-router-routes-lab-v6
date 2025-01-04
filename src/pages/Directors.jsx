import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);


  useEffect(() =>{
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error));
  }, []);

  const movieList = directors.map(director => director.movies) 

  const directorList = directors.map(director =>{
    return <article key={director.id} ><h2>{director.name}</h2><ul>{movieList.map(movie => <li>{movie}</li>)}</ul></article>
    });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors' Page</h1>
        <>{directorList}</>
      </main>
    </>
  );
};

export default Directors;
