import React, {useState, useEffect} from 'react'
import { Navigate} from 'react-router-dom'
import MovieCard from "../component/movieCard";
import SearchIcon from "../img/search_icon.svg";

const API_URL = "http://www.omdbapi.com?apikey=25e8e1ed";

const Superman = ({user}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("Superman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };

    const massage = () => {
        alert('anda harus login terlebih dahulu');
    }

    if (!user) {
        return (
            <div>
                <h1>{massage()}</h1>
                <Navigate to="/" replace />
            </div>
        )
    }

    return (
        <div className="app">
            <h1>Superman</h1>
        
            <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
            </div>
        
            {movies?.length > 0 ? (
            <div className="container">
                {movies.map((movie) => (
                <MovieCard movie={movie} />
                ))}
            </div>
            ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
            )}
      </div>
    )
}

export default Superman
