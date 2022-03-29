import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
    const handleContextMenu = (e) => {
        // e.preventDefault();
    };

    return (
        <div className="register" onContextMenu={handleContextMenu}>
            <div className="register__logo">
                <img
                    className="register__logo-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link to="/login">
                    <button className="register__logo-btn">Sign In</button> 
                </Link>
            </div>
            <div className="register__wrap">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                <div className="register__form">
                    <input
                        type="email"
                        placeholder="E-mail address"
                        className="register__input"
                    />
                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    );
}
