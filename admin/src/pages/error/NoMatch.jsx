import { Link } from "react-router-dom";
import "./noMatch.scss";

function NoMatch() {

    const handleContextMenu = (e) => {
        // e.preventDefault();
    }

    return (
        <div class="error-page" onContextMenu={handleContextMenu}>
            <div className="stars">
                <div class="error__navbar">
                    <div className="error__navbar-logo">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                            className="error__navbar-logo-img"
                        />
                    </div>
                    <div className="error__navbar-directions">
                        <ul className="error__navbar-list hide-on-mobile">
                            <li className="error__navbar-item">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="error__navbar-link"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="error__navbar-item">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="error__navbar-link"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="error__navbar-item">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="error__navbar-link"
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="error__navbar-item">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="error__navbar-link error__navbar-link--request"
                                >
                                    Request A Demo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="error__body">
                    <img
                        src="http://salehriaz.com/404Page/img/404.svg"
                        alt=""
                        className="error__body-img"
                    />
                    <Link to="/" target="_blank" className="error__body-btn">
                        GO BACK HOME
                    </Link>
                </div>

                <div class="error__objects">
                    <img
                        class="object_rocket"
                        src="http://salehriaz.com/404Page/img/rocket.svg"
                        alt=""
                        style={{ width: "40px" }}
                    />
                    <div class="earth-moon">
                        <img
                            class="object_earth"
                            src="http://salehriaz.com/404Page/img/earth.svg"
                            alt=""
                            style={{ width: "100px" }}
                        />
                        <img
                            class="object_moon"
                            src="http://salehriaz.com/404Page/img/moon.svg"
                            alt=""
                            style={{ width: "80px" }}
                        />
                    </div>
                    <div class="box_astronaut">
                        <img
                            class="object_astronaut"
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                            alt=""
                            style={{ width: "140px" }}
                        />
                    </div>
                </div>

                <div class="error__stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;
