import { useEffect, useState } from "react";

import MovieCard from './MovieCard';

import './App.css';

import SearchIcon from './search.svg';

//e52f2d97
const API_URL = 'http://www.omdbapi.com?apikey=e52f2d97';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
"Title": "Reign of Judges: Title of Liberty - Concept Short",
"Type" : "movie",
"Year": "2018",
"imdbID": "tt4275958"
}


const App = () => {

    const  [movies, setMovies] = useState([]);
  
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.Search);
  }

    useEffect(() => {
      searchMovie('Spectre');
    }, []);

    return (
        <div className="app">
        <h1>Vetflix</h1>
        <div className="search">
            <input placeholder="Search for Movies" 
            value='Zindagi Na Milegi Dobara'
            onChange={() => {}}
            />
            <img
            src={SearchIcon}
            alt="search"
            onChange={() => {}} 
            />
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => {
                            <MovieCard movie={movie}/>
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                     </div>   
                )
            }

            <div className="container">
             <MovieCard movie1={movies[0]} />
         </div>
        </div>
    )
}
export default App;

