import { Link } from "react-router-dom";
import "./noForbidden.scss";

function NoForbidden() {

    const handleContextMenu = (e) => {
        // e.preventDefault();
    }

    return (
        <div className="forbidden-page" onContextMenu={handleContextMenu}>
            <div class="gandalf">
                <div class="fireball"></div>
                <div class="skirt"></div>
                <div class="sleeves"></div>
                <div class="shoulders">
                    <div class="hand left"></div>
                    <div class="hand right"></div>
                </div>
                <div class="head">
                    <div class="hair"></div>
                    <div class="beard"></div>
                </div>
            </div>
            <div class="message">
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
