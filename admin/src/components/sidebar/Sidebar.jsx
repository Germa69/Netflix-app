import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    PlayCircleOutline,
    List,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrap">
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__list">
                        <Link to="/" className="link">
                            <li className="sidebar__item active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebar__item">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebar__item">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <Link to="/users" className="link">
                            <li className="sidebar__item">
                                <PermIdentity className="sidebar__icon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/movies" className="link">
                            <li className="sidebar__item">
                                <PlayCircleOutline className="sidebar__icon" />
                                Movies
                            </li>
                        </Link>
                        <Link to="/lists" className="link">
                            <li className="sidebar__item">
                                <List className="sidebar__icon" />
                                Lists
                            </li>
                        </Link>
                        <li className="sidebar__item">
                            <BarChart className="sidebar__icon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__item">
                            <MailOutline className="sidebar__icon" />
                            Mail
                        </li>
                        <li className="sidebar__item">
                            <DynamicFeed className="sidebar__icon" />
                            Feedback
                        </li>
                        <li className="sidebar__item">
                            <ChatBubbleOutline className="sidebar__icon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__item">
                            <WorkOutline className="sidebar__icon" />
                            Manage
                        </li>
                        <li className="sidebar__item">
                            <Timeline className="sidebar__icon" />
                            Analytics
                        </li>
                        <li className="sidebar__item">
                            <Report className="sidebar__icon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
