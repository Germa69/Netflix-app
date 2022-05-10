import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./listItem.scss";

function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " +
                            JSON.parse(localStorage.getItem("user"))
                                .accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getMovie();
        return () => {
        };
    }, [item]);

    return (
        <Link to={{ pathname: "/watch" }} state={{ movie: movie }}>
            <div
                className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie?.thumbnail}
                    alt={movie.title}
                    className="listItem__img"
                />
                {isHovered && (
                    <>
                        <video
                            className="listItem__video"
                            src={movie.trailer}
                            autoPlay={true}
                            loop
                        />
                        <div className="item__info">
                            <div className="item__info-icons">
                                <PlayArrow className="item__icon" />
                                <Add className="item__icon" />
                                <ThumbUpAltOutlined className="item__icon" />
                                <ThumbDownOutlined className="item__icon" />
                            </div>
                            <div className="item__info-timers">
                                <span className="item__timer">
                                    {movie.duration}
                                </span>
                                <span className="item__timer limit">
                                    +{movie.limit}
                                </span>
                                <span className="item__timer">
                                    {movie.year}
                                </span>
                            </div>
                            <div className="item__info-desc">{movie.desc}</div>
                            <div className="item__info-genre">
                                {movie.genre}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

export default ListItem;
