import { Link } from "react-router-dom";
import "./noForbidden.scss";

function NoForbidden() {

    const handleContextMenu = (e) => {
        // e.preventDefault();
    }

    return (
        <div className="forbidden-page" onContextMenu={handleContextMenu}>
            <div className="gandalf">
                <div className="fireball"></div>
                <div className="skirt"></div>
                <div className="sleeves"></div>
                <div className="shoulders">
                    <div className="hand left"></div>
                    <div className="hand right"></div>
                </div>
                <div className="head">
                    <div className="hair"></div>
                    <div className="beard"></div>
                </div>
            </div>
            <div className="message">
                <h1>Forbidden</h1>
                <p>
                    Error code: 403 - Access to this page is restricted
                    <br />
                    Please check with the site admin if you believe this is a
                    mistake.
                    <br />
                    <Link to="/login" className="error">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NoForbidden;
