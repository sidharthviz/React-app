import {useEffect} from "react";

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
        <h1>
         App
        </h1>
    )
}
export default App;