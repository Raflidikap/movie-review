import { useEffect, useState } from 'react';
import '../App.css';
import {getMovieList, searchMovie} from "../api"
import { Link } from 'react-router-dom';

const Home=()=>{
    const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
      
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return(
          <div className="Movie-wrapper" key={i}>
            <Link to={`detailReview/${movie.id}`} className='Link'>
              <div className="Movie-title">{movie.title}</div>
            </Link>
            <img className="Movie-img"
            alt=''
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = async(q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MovieApp</h1>
        <input type="text" 
        placeholder='Cari film...' 
        className='Movie-search'
        onChange={({target}) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  )
}

export default Home