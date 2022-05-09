import { useState, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/TopBar";
import { storage } from "../../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newProduct.scss";

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

    // console.log(movie);
    // console.log(image);
    // console.log(subTitle);
    // console.log(thumbnail);
    // console.log(trailer);
    // console.log(video);

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
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (url) => {
                            setMovie(prev => {  
                                return { ...prev, [item.label]: url }
                            });
                            setUploaded(prev => prev + 1);
                        }
                    );
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

    console.log(movie);

    return (
        <>
            <TopBar />
            <div className="container">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">Thêm phim</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>Hình ảnh [lớn]</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Hình ảnh [nhỏ]</label>
                            <input
                                type="file"
                                id="subTitle"
                                name="subTitle"
                                onChange={(e) => setSubTitle(e.target.files[0])}
                            />
                        </div>
                        <div className="addProductItem">
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
                            <label>Limit</label>
                            <input
                                type="number"
                                placeholder="limit"
                                name="limit"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Year</label>
                            <input
                                type="number"
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
                        {/* <div className="addProductItem">
                            <label>Duration</label>
                            <input
                                type="text"
                                placeholder="Duration"
                                name="duration"
                                onChange={handleChange}
                            />
                        </div> */}
                        <div className="addProductItem">
                            <label>Mô tả</label>
                            <textarea
                                name="desc"
                                rows="5"
                                placeholder="Nhập mô tả..."
                                onChange={handleChange}
                            ></textarea>
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
                            <input
                                type="file"
                                name="trailer"
                                onChange={(e) => setTrailer(e.target.files[0])}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Video</label>
                            <input
                                type="file"
                                name="video"
                                onChange={(e) => setVideo(e.target.files[0])}
                            />
                        </div>

                        {uploaded === 5 ? (
                            <button
                                className="addProductButton"
                                onClick={handleSubmit}
                            >
                                Thêm
                            </button>
                        ) : (
                            <button
                                className="addProductButton"
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
