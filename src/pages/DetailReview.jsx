import { useParams } from 'react-router-dom';
import "../detailreview.css"
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';

const DetailReview=()=>{
    const id = useParams()
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        getMovieDetails(id).then((result) => {
            setMovieDetails(result.data)
            console.log(result.data)
        })
    }, [])


    return(
        <div className="detailPage">
           
                    <div className="movie-container">
                            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movieDetails.poster_path}`}alt="Movie Poster" className="poster" />
                            <h1 className="title">{movieDetails.title}</h1>
                            <p className="release-date">Release Date:{movieDetails.release_date} </p>
                            <p className="rating">Rating: {movieDetails.vote_average}</p>
                            <p className="description">{movieDetails.overview}</p>
                        </div>
                
            
        </div>
    )
    
}

export default DetailReview