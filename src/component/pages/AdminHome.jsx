import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delete_movies, get_movies, post_movies, update_movies } from '../../rect-toolkit/api/api';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AdminHome = () => {
    const dispatch = useDispatch();
    const image = useRef();
    const name = useRef();
    const genres = useRef();
    const cast = useRef();
    const language = useRef();
    const date = useRef();
    const duration = useRef();
    const screen = useRef();
    const rating = useRef();

    const [open, setOpen] = useState(false);
    const [view, setView] = useState({});
    const [search, setSearch] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(get_movies());
    }, [dispatch]);

    const addMovies = () => {
        const newMovie = {
            image: image.current.value,
            name: name.current.value,
            genres: genres.current.value,
            cast: cast.current.value,
            language: language.current.value,
            date: date.current.value,
            duration: duration.current.value,
            screen: screen.current.value,
            rating: rating.current.value,
        };
        dispatch(post_movies(newMovie));
    };

    const deleteMovies = (id) => {
        dispatch(delete_movies(id));
    };

    const viewMovies = (val) => {
        setView(val);
    };

    const handleViewMovies = (e) => {
        setView({ ...view, [e.target.name]: e.target.value });
    };

    const updateMovies = () => {
        dispatch(update_movies(view));
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="movies-data mt-4">
                <input type="text" className='mb-3 me-4' placeholder='Search Movie' onChange={handleSearch} />
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Movies
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Add a new movie"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <label>Image :-</label><br />
                            <input type="text" className='w-100' ref={image} /> <br />
                            <label>Name :-</label><br />
                            <input type="text" className='w-100' ref={name} /> <br />
                            <label>Genres :-</label><br />
                            <input type="text" className='w-100' ref={genres} /> <br />
                            <label>Cast :-</label><br />
                            <input type="text" className='w-100' ref={cast} /> <br />
                            <label>Language :-</label><br />
                            <input type="text" className='w-100' ref={language} /> <br />
                            <label>Date :-</label><br />
                            <input type="date" className='w-100' ref={date} /> <br />
                            <label>Duration :-</label><br />
                            <input type="text" className='w-100' ref={duration} /> <br />
                            <label>Screen :-</label><br />
                            <input type="text" className='w-100' ref={screen} /> <br />
                            <label>Rating :-</label><br />
                            <input type="text" className='w-100' ref={rating} /> <br />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={() => { handleClose(); addMovies() }} autoFocus>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>

                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>GENRES</th>
                            <th>CAST</th>
                            <th>LANGUAGE</th>
                            <th>DATE</th>
                            <th>DURATION</th>
                            <th>SCREEN</th>
                            <th>RATING</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovies.map((val, index) => (
                            <tr key={index}>
                                <td><img src={val.image} width={50} height={50} alt="" /></td>
                                <td>{val.name}</td>
                                <td>{val.genres}</td>
                                <td>{val.cast}</td>
                                <td>{val.language}</td>
                                <td>{val.date}</td>
                                <td>{val.duration}</td>
                                <td>{val.screen}</td>
                                <td>{val.rating}</td>
                                <td><button className='btn btn-outline-dark' onClick={() =>
                                    deleteMovies(val.id)}><i className="fa-solid fa-trash-can"></i></button></td>
                                <td><button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" onClick={() => viewMovies(val)} data-bs-target="#exampleModal">
                                    <i className="fa-regular fa-eye"></i>
                                </button></td>
                            </tr>
                        ))}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Movie</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <label>Image :-</label><br />
                                        <input type="text" className='w-100' name='image' value={view.image} onChange={handleViewMovies} /> <br />
                                        <label>Name :-</label><br />
                                        <input type="text" className='w-100' name='name' value={view.name} onChange={handleViewMovies} /> <br />
                                        <label>Genres :-</label><br />
                                        <input type="text" className='w-100' name='genres' value={view.genres} onChange={handleViewMovies} /> <br />
                                        <label>Cast :-</label><br />
                                        <input type="text" className='w-100' name='cast' value={view.cast} onChange={handleViewMovies} /> <br />
                                        <label>Language :-</label><br />
                                        <input type="text" className='w-100' name='language' value={view.language} onChange={handleViewMovies} /> <br />
                                        <label>Date :-</label><br />
                                        <input type="date" className='w-100' name='date' value={view.date} onChange={handleViewMovies} /> <br />
                                        <label>Duration :-</label><br />
                                        <input type="text" className='w-100' name='duration' value={view.duration} onChange={handleViewMovies} /> <br />
                                        <label>Screen :-</label><br />
                                        <input type="text" className='w-100' name='screen' value={view.screen} onChange={handleViewMovies} /> <br />
                                        <label>Rating :-</label><br />
                                        <input type="text" className='w-100' name='rating' value={view.rating} onChange={handleViewMovies} /> <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" onClick={updateMovies} className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminHome;
