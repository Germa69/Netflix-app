import { useState, useEffect } from "react";
import axios from "axios";
import "./widgetLg.scss";

export default function WidgetLg() {
    const [newMovies, setNewMovies] = useState([]);

    const Button = ({ type, title }) => {
        return <button className={"widgetLg__btn " + type}>{title}</button>;
    };

    useEffect(() => {
        const getNewMovies = async () => {
            try {
                const res = await axios.get("/movies?new=true", {
                    headers: {
                        token:
                            "Bearer " +
                            JSON.parse(localStorage.getItem("user"))
                                .accessToken,
                    },
                });
                setNewMovies(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewMovies();
    }, []);

    return (
        <div className="widgetLg">
            <h3 className="widgetLg__title">Phim mới cập nhật</h3>
            <table className="widgetLg__table">
                <tbody>
                    <tr className="widgetLg__tr">
                        <th className="widgetLg__th">Tên phim</th>
                        <th className="widgetLg__th">Thể loại</th>
                        <th className="widgetLg__th">Độ dài phim</th>
                        <th className="widgetLg__th">Năm xuất bản</th>
                        <th className="widgetLg__th">Loại</th>
                    </tr>
                    {newMovies.map((movie, index) => (
                        <tr className="widgetLg__tr" key={index}>
                            <td className="widgetLg__movie">
                                <img
                                    src={movie.image}
                                    alt=""
                                    className="widgetLg__img"
                                />
                                <span className="widgetLg__name">
                                    {movie.title}
                                </span>
                            </td>
                            <td className="widgetLg__genre">{movie.genre}</td>
                            <td className="widgetLg__limit">{movie.limit}</td>
                            <td className="widgetLg__year">{movie.year}</td>
                            <td className="widgetLg__status">
                                <Button type={movie.isSeries ? 'approved' : 'declined'} title={movie.isSeries ? 'Movies' : 'Series'}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
