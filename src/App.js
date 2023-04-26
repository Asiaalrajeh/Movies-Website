import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//5e732d96


const App = () => {

    const [movies, setMovies]= useState([]);
    const [searchWord, setSearchWord] = useState('');

    const search = async (Title) => {
       const API_URL = `http://www.omdbapi.com/?s=${Title}&apikey=5e732d96`;
       const response = await fetch(API_URL);
       const data = await response.json();

       console.log(data.Search);
       setMovies(data.Search);
    }

    useEffect(() => { 
       search('nemo');
    },[]);

    return(
        
      <div className="app">
        <h1>Night Owl</h1>

        <div className="search">
            <input
            placeholder="search for movies"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)} 
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={() => {search(searchWord)}}
            />
           
        </div>

         {movies?.length > 0 
            ? (
               <div className="container">
                { movies.map((movie) => (
                    <ul key={movie.imdbID}>
                   <MovieCard mov={movie} />
                   </ul>
                  ))}
                 </div>
            ) : (
              <div className="empty">
                <h2> no movies found</h2>
              </div>
            )
         }

        
      </div>
        
    );
};
export default App; // so it can be could from somewhere else 