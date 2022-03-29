import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured() {

    return (
        <div className="featured">
            <div className="featured__category">
                <span>Movies</span>
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

            <img
                src="http://icdn.dantri.com.vn/zoom/1200_630/2016/img20160519213448746-crop-1463670229519.jpg"
                alt="Supperman"
                className="featured__img"
            />
            <div className="featured__info">
                <img src="http://icdn.dantri.com.vn/zoom/1200_630/2016/img20160519213448746-crop-1463670229519.jpg" alt="" className="featured__img" />
                <span className="featured__desc">Test Desc</span>
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
