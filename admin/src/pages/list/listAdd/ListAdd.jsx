import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { Home } from "@material-ui/icons";
import { getMovies } from "../../../context/movieContext/ApiCalls";
import { createList } from "../../../context/listContext/ApiCalls";
import { ListContext } from "../../../context/listContext/ListContext";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import "./listAdd.scss";

export default function NewList() {
    let navigate = useNavigate();

    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };

    const handleSelect = (e) => {
        console.log(e.target.selectedOptions);
        let value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setList({ ...list, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        navigate("/lists");
    };

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="lists">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="/movies">Danh sách thể loại</Link>
                        </li>
                        <li>
                            <span className="current">Thêm thể loại</span>
                        </li>
                    </ul>

                    <form className="list__form">
                        <div className="list__form-item">
                            <label>Tiêu đề</label>
                            <input
                                type="text"
                                placeholder="Nhập tiêu đề..."
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="list__form-item">
                            <label>Thể loại</label>
                            <input
                                type="text"
                                placeholder="Nhập thể loại"
                                name="genre"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="list__form-item">
                            <label>Loại</label>
                            <select
                                name="type"
                                id="type"
                                onChange={handleChange}
                            >
                                <option disabled selected>
                                    Chọn loại phim
                                </option>
                                <option value="movies">Movies</option>
                                <option value="series">Series</option>
                            </select>
                        </div>
                        <div className="list__form-item">
                            <label>Nội dung</label>
                            <select
                                multiple
                                name="content"
                                id="content"
                                onChange={handleSelect}
                            >
                                {movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>
                                        {movie.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="list__form-button"
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
