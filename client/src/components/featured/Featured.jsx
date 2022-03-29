import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

function Featured({ type }) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2MzN2FlZjMyZTE1ZWM1NmQ0ZTRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU3OTA3MCwiZXhwIjoxNjQ5MDExMDcwfQ.TqEMzLpqfnQ00Mv0sKw1RNvrqnDXaZFm3Tl28yw0EcE",
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
    }, [type]);

    return (
        <div className="featured">
            {type && (
                <div className="featured__category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" className="featured__category-select">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src={content.image}
                alt={content.title}
                className="featured__img"
            />
            <div className="featured__info">
                <img src={content.thumbnail} alt="" className="featured__img" />
                <span className="featured__desc">{content.desc}</span>
                <div className="featured__buttons">
                    <button className="featured__button play">
                        <PlayArrow />
                        <span className="featured__text">Play</span>
                    </button>
                    <button className="featured__button more">
                        <InfoOutlined />
                        <span className="featured__text">Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
