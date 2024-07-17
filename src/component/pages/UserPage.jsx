import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { get_movies } from '../../rect-toolkit/api/api';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(get_movies());
    }, [dispatch]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="movies-data mt-4">
                <div className="container">
                    <div className="row">
                        <input type="text" className='mb-3' placeholder='Search Movie' onChange={handleSearch} />
                        {filteredMovies.map((val, index) => (
                            <div className="col-3" key={index}>
                                <div className="border text-center">
                                    <Card 
                                        image={val.image} 
                                        name={val.name} 
                                        genres={val.genres} 
                                        cast={val.cast} 
                                        language={val.language} 
                                        date={val.date} 
                                        duration={val.duration} 
                                        screen={val.screen} 
                                        rating={val.rating} 
                                    />
                                    <Link to={`/${val.id}`} className='btn btn-outline-dark mb-2'>More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
