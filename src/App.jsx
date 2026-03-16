import { useState } from "react";

const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [genre, setGenre] = useState("");
  console.log(genre);
  
  


  return (
    <>
      <div className="container">
        <select
          className="form-select my-5"
          aria-label="Default select example"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        >
          <option value="">All</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
        <ul className="list-group">
          {movies.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item.title}, {item.genre}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
