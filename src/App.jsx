import { useEffect, useState } from "react";

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
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const matchGenre = genre === "" || movie.genre === genre;
      const matchTitle = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchGenre && matchTitle;
    });

    setFilteredMovies(filtered);
  }, [genre, search]);

  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Type the movie name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

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
          {filteredMovies.map((item, index) => (
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
