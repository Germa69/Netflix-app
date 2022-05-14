import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./widgetSm.scss";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token:
                            "Bearer " +
                            JSON.parse(localStorage.getItem("user"))
                                .accessToken,
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSm__title">Thành viên mới tham gia</span>
            <ul className="widgetSm__list">
                {newUsers.map((user, index) => (
                    <li className="widgetSm__item" key={index}>
                        <img
                            src={
                                user.profilePic ||
                                "https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                            }
                            alt=""
                            className="widgetSm__img"
                        />
                        <div className="widgetSm__user">
                            <span className="widgetSm__user-name">
                                {user.username}
                            </span>
                        </div>
                        <Link
                            to={"/user/" + user._id}
                            state={{ user: user }}
                            className="widgetSm__link"
                        >
                            <button className="widgetSm__btn">
                                <Visibility className="widgetSm__icon" />
                                Hiển thị
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
