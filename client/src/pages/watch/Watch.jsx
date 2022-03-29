import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./watch.scss";

function Watch() {
    let location = useLocation();
    const { movie } = location.state;

    return (
        <div className="watch">
            <Link to="/">
                <div className="watch__back">
                    <ArrowBackOutlined />
                    <span>Home</span>
                </div>
            </Link>

            <ReactPlayer
                className="watch__video"
                url={movie.video}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
            />
        </div>
    );
}

export default Watch;
