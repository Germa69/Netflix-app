import {
    MailOutline,
    PermIdentity,
    AccountBalance,
    Home,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { useLocation } from "react-router-dom";
import "./userInfo.scss";

export default function User() {
    const location = useLocation();
    const { user } = location.state;

    return (
        <>
            <TopBar />
            <div className="user">
                <Sidebar />
                <div className="user-container">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                                Danh sách người dùng
                            </Link>
                        </li>
                        <li>
                            <span className="current">
                                Thông tin người dùng
                            </span>
                        </li>
                    </ul>
                    <div className="user__show">
                        <div className="user__top">
                            <img
                                src={user.avatar}
                                alt=""
                                className="user__top-img"
                            />
                            <div className="user__top-title">
                                <span className="user__top-username">
                                    {user.username}
                                </span>
                            </div>
                        </div>

                        <div className="user__bottom">
                            <span className="user__bottom-title">
                                Thông tin chi tiết
                            </span>
                            <div className="user__info">
                                <PermIdentity className="user__info-icon" />
                                <span className="user__info-title">
                                    {user.username}
                                </span>
                            </div>
                            <div className="user__info">
                                <MailOutline className="user__info-icon" />
                                <span className="user__info-title">
                                    {user.email}
                                </span>
                            </div>
                            <div className="user__info">
                                <AccountBalance className="user__info-icon" />
                                <span className="user__info-title">
                                    {user.isAdmin ? "Admin" : "Người dùng"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
