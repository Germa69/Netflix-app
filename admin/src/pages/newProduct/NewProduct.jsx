import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import "./newProduct.scss";

export default function NewProduct() {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [subtitle, setSubTitle] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    console.log(movie);

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">New Movie</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Image</label>
                            <input
                                type="file"
                                id="img"
                                name="img"
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Title image</label>
                            <input type="file" id="subtitle" name="subtitle" />
                        </div>
                        <div className="addProductItem">
                            <label>Thumbnail</label>
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Title</label>
                            <input
                                type="text"
                                placeholder="John Wick"
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="description"
                                name="desc"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Year</label>
                            <input
                                type="text"
                                placeholder="Year"
                                name="year"
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
                            <label>Duration</label>
                            <input
                                type="text"
                                placeholder="Duration"
                                name="duration"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Limit</label>
                            <input
                                type="text"
                                placeholder="limit"
                                name="limit"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Is Series?</label>
                            <select
                                name="isSeries"
                                id="isSeries"
                                onChange={handleChange}
                            >
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>
                        <div className="addProductItem">
                            <label>Trailer</label>
                            <input type="file" name="trailer" />
                        </div>
                        <div className="addProductItem">
                            <label>Video</label>
                            <input type="file" name="video" />
                        </div>
                        <button className="addProductButton">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
}