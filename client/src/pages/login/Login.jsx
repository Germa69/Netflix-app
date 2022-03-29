import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login" onContextMenu={handleContextMenu}>
            <div className="login__logo">
                <img
                    className="login__logo-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>

            <div className="login__wrap">
                <form className="login__form">
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        className="login__input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login__input"
                    />
                    <button className="login__btn">Sign In</button>

                        <span className="login__span">
                            New to Netflix? 
                            <Link to="/register" className="login__link">
                                Sign up now.
                            </Link>
                        </span>

                    <small>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
