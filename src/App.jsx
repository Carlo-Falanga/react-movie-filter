import { useState } from "react"

 const movies = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]


function App() {


  return (
    <>
    <div className="container">
      <ul>
      {
        movies.map((item, index) =>(
          
          <li key={index}>{item.title}, {item.genre}</li>
        ))
      }

      </ul>
    </div>
    </>
  )
}

export default App
