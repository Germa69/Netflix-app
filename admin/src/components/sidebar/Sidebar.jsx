import {
    PlayCircleOutline,
    List,
    Report,
    PermIdentity,
    DashboardTwoTone
} from "@material-ui/icons";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../context/authContext/AuthActions';
import { AuthContext } from '../../context/authContext/AuthContext';
import "./sidebar.scss";

function Sidebar() {

    const { dispatch } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div className="sidebar__wrap">
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Bảng điều khiển</h3>
                    <ul className="sidebar__list">
                        <Link to="/" className="link">
                            <li className="sidebar__item active">
                                <DashboardTwoTone className="sidebar__icon" />
                                Trang chủ
                            </li>
                        </Link>
                        {/* <li className="sidebar__item">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebar__item">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li> */}
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quản lý</h3>
                    <ul className="sidebar__list">
                        <Link to="/users" className="link">
                            <li className="sidebar__item">
                                <PermIdentity className="sidebar__icon" />
                                Người dùng
                            </li>
                        </Link>
                        <Link to="/movies" className="link">
                            <li className="sidebar__item">
                                <PlayCircleOutline className="sidebar__icon" />
                                Phim
                            </li>
                        </Link>
                        <Link to="/lists" className="link">
                            <li className="sidebar__item">
                                <List className="sidebar__icon" />
                                Thể loại
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Cài đặt</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__item" onClick={() => dispatch(logout())}>
                            <Report className="sidebar__icon" />
                            Đăng xuất
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
