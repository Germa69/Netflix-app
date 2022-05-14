import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { Link, useLocation } from "react-router-dom";
import { Publish, Home } from "@material-ui/icons";

import "./movieEdit.scss";

export default function Product() {
    const location = useLocation();
    const { movie } = location.state;

    return (
        <>
            <TopBar />
            <div className="movie">
                <Sidebar />
                <div className="movie-container">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="/movies">Danh sách phim</Link>
                        </li>
                        <li>
                            <span className="current">
                                Cập nhật phim
                            </span>
                        </li>
                    </ul>
                    <div className="movie__top">
                        <div className="movie__info-top">
                            <img
                                src={movie.image}
                                alt=""
                                className="movie__info-img"
                            />
                            <span className="movie__info-title">{movie.title}</span>
                        </div>
                        <div className="movie__info-bottom">
                            <div className="movie__item">
                                <span className="movie__item-key">id:</span>
                                <span className="movie__item-value">
                                    {movie._id}
                                </span>
                            </div>
                            <div className="movie__item">
                                <span className="movie__item-key">genre:</span>
                                <span className="movie__item-value">
                                    {movie.genre}
                                </span>
                            </div>
                            <div className="movie__item">
                                <span className="movie__item-key">year:</span>
                                <span className="movie__item-value">
                                    {movie.year}
                                </span>
                            </div>
                            <div className="movie__item">
                                <span className="movie__item-key">limit</span>
                                <span className="movie__item-value">
                                    {movie.limit}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="movie__bottom">
                        <form className="movie__form">
                            <div className="movie__form-left">
                                <label>Movie Title</label>
                                <input type="text" placeholder={movie.title} />
                                <label>Year</label>
                                <input type="text" placeholder={movie.year} />
                                <label>Genre</label>
                                <input type="text" placeholder={movie.genre} />
                                <label>Limit</label>
                                <input type="text" placeholder={movie.limit} />
                                <label>Trailer</label>
                                <input type="file" />
                                <label>Video</label>
                                <input type="file" />
                            </div>

                            <div className="movie__form-right">
                                <div className="movie__upload">
                                    <img
                                        src={movie.image}
                                        alt=""
                                        className="movie__upload-img"
                                    />
                                    <label for="file">
                                        <Publish />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <button className="movie__button">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
