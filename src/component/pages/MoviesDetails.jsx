import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_movies } from '../../rect-toolkit/api/api';

const MoviesDetails = () => {
    let { id } = useParams();
    let dispatch = useDispatch()

    let movies = useSelector((state) => state.movies.movies)
    console.log(movies, "movies for more details");
    useEffect(() => {
        dispatch(get_movies())
    }, [])

    let result = movies.filter((val) => val.id == id)
    console.log(result, "for more details");

    return (
        <>
            <div className="movies-details mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={result[0]?.image} alt="" />
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><label className='me-2 mb-3'>Name :-</label> {result[0]?.name}</li>
                                <li><label className='me-2 mb-3'>Genres :-</label> {result[0]?.genres}</li>
                                <li><label className='me-2 mb-3'>Cast :-</label>{result[0]?.cast}</li>
                                <li><label className='me-2 mb-3'>Language :-</label>{result[0]?.language}</li>
                                <li><label className='me-2 mb-3'>Date :-</label>{result[0]?.date}</li>
                                <li><label className='me-2 mb-3'>Duration :-</label>{result[0]?.duration}</li>
                                <li><label className='me-2 mb-3'>Screen :-</label>{result[0]?.screen}</li>
                                <li><label className='me-2 mb-3'>Rating :-</label>{result[0]?.rating}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesDetails