import { useEffect } from "react";

import './App.css';

//e52f2d97
const API_URL = 'http://www.omdbapi.com?apikey=e52f2d97';


const App = () => {
  
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

        </div>
        </div>
    )
}
export default App;

