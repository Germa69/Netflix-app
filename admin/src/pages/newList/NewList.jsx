import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import { getMovies } from "../../context/movieContext/ApiCalls";
import { createList } from "../../context/listContext/ApiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newList.scss";

export default function NewList() {
    let navigate = useNavigate();

    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie])
    

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSelect = (e) => {
        console.log(e.target.selectedOptions);
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        navigate('/lists');
    };

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">Thêm phim</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Tiêu đề</label>
                            <input
                                type="text"
                                placeholder="Nhập tiêu đề..."
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Genre</label>
                            <input
                                type="text"
                                placeholder="Genre"
                                name="genre"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Type</label>
                            <select
                                name="type"
                                id="type"
                                onChange={handleChange}
                            >
                                <option>Type</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                            </select>
                        </div>
                        <div className="addProductItem">
                            <label>Content</label>
                            <select
                                multiple
                                name="content"
                                id="content"
                                onChange={handleSelect}
                            >
                                {movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="addProductButton"
                            onClick={handleSubmit}
                        >
                            Thêm
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
