import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topBar.scss";

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topBar__wrap">
                <div className="topBar__left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="topBar__logo"
                    />
                </div>
                <div className="topBar__right">
                    <div className="topBar__icon">
                        <NotificationsNone />
                        <span className="topBar__icon-badge">2</span>
                    </div>
                    <div className="topBar__icon">
                        <Language />
                        <span className="topBar__icon-badge">2</span>
                    </div>
                    <div className="topBar__icon">
                        <Settings />
                    </div>
                    <img
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="topBar__avatar"
                    />
                </div>
            </div>
        </div>
    );
}
