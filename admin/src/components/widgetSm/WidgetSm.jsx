import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import "./widgetSm.scss";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2MzN2FlZjMyZTE1ZWM1NmQ0ZTRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYyOTM1MiwiZXhwIjoxNjQ5MDYxMzUyfQ.oVeTFDjaZfPS2AVw5ZZy2oapnB5CwS8RgLQ7JLbbjdw",
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
            <span className="widgetSm__title">New Join Members</span>
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
                        <button className="widgetSm__btn">
                            <Visibility className="widgetSm__icon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
