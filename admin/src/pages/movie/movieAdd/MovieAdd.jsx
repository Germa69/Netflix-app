import { useState, useContext } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { storage } from "../../../firebase/config";
import { Home } from "@material-ui/icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { createMovie } from "../../../context/movieContext/ApiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import "./movieAdd.scss";

export default function NewProduct() {
    const [movie, setMovie] = useState(null);
    const [image, setImage] = useState(null);
    const [subTitle, setSubTitle] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: image, label: "image" },
            { file: subTitle, label: "subTitle" },
            { file: thumbnail, label: "thumbnail" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMovie(movie, dispatch);
    };

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="movies">
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
                            <span className="current">Thêm phim</span>
                        </li>
                    </ul>

                    <form className="movie__form">
                        <div className="movie__form-item">
                            <label>Hình ảnh [lớn]</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Hình ảnh [nhỏ]</label>
                            <input
                                type="file"
                                id="subTitle"
                                name="subTitle"
                                onChange={(e) => setSubTitle(e.target.files[0])}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Hình ảnh [thumbnail]</label>
                            <input
                                type="file"
                                id="thumbnail"
                                name="thumbnail"
                                onChange={(e) =>
                                    setThumbnail(e.target.files[0])
                                }
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Tiêu đề</label>
                            <input
                                type="text"
                                placeholder="Nhập tiêu đề..."
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Độ dài</label>
                            <input
                                type="number"
                                placeholder="limit"
                                name="limit"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Năm xuất bản</label>
                            <input
                                type="number"
                                placeholder="Year"
                                name="year"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Thể loại</label>
                            <input
                                type="text"
                                placeholder="Genre"
                                name="genre"
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="movie__form-item">
                            <label>Duration</label>
                            <input
                                type="text"
                                placeholder="Duration"
                                name="duration"
                                onChange={handleChange}
                            />
                        </div> */}
                        <div className="movie__form-item">
                            <label>Mô tả</label>
                            <textarea
                                name="desc"
                                rows="5"
                                placeholder="Nhập mô tả..."
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="movie__form-item">
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
                        <div className="movie__form-item">
                            <label>Trailer</label>
                            <input
                                type="file"
                                name="trailer"
                                onChange={(e) => setTrailer(e.target.files[0])}
                            />
                        </div>
                        <div className="movie__form-item">
                            <label>Video</label>
                            <input
                                type="file"
                                name="video"
                                onChange={(e) => setVideo(e.target.files[0])}
                            />
                        </div>

                        {uploaded === 5 ? (
                            <button
                                className="movie__form-button"
                                onClick={handleSubmit}
                            >
                                Thêm
                            </button>
                        ) : (
                            <button
                                className="movie__form-button"
                                onClick={handleUpload}
                            >
                                Tải lên
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
