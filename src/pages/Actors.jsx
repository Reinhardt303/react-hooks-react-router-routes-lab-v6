import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);


  useEffect(() =>{
    fetch('http://localhost:4000/actors')
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error));
  }, []);

  const movieList = actors.map(actor => actor.movies) 
  console.log(movieList[0])

  const actorList = actors.map(actor =>{
    return <article key={actor.id} ><h2>{actor.name}</h2><ul>{movieList.map(movie => <li>{movie}</li>)}</ul></article>
    });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors' Page</h1>
        <>{actorList}</>
      </main>
    </>
  );
};

export default Actors;
