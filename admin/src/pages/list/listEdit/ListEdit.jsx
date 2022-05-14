import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/TopBar";
import { Link, useLocation } from "react-router-dom";
import { Publish, Home } from "@material-ui/icons";

import "./listEdit.scss";

export default function List() {
    const location = useLocation();
    const { list } = location.state;

    return (
        <>
            <TopBar />
            <div className="list">
                <Sidebar />
                <div className="list-container">
                    <ul id="breadcrumbs">
                        <li>
                            <Link to="/">
                                <Home />
                            </Link>
                        </li>
                        <li>
                            <Link to="/lists">Danh sách thể loại</Link>
                        </li>
                        <li>
                            <span className="current">
                                Cập nhật thể loại
                            </span>
                        </li>
                    </ul>
                    <div className="list__top">
                        <div className="list__info-top">
                            <span className="list__info-title">{list.title}</span>
                        </div>
                        <div className="list__info-bottom">
                            <div className="list__item">
                                <span className="list__item-key">id:</span>
                                <span className="list__item-value">
                                    {list._id}
                                </span>
                            </div>
                            <div className="list__item">
                                <span className="list__item-key">genre:</span>
                                <span className="list__item-value">
                                    {list.genre}
                                </span>
                            </div>
                            <div className="list__item">
                                <span className="list__item-key">type:</span>
                                <span className="list__item-value">
                                    {list.type}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="list__bottom">
                        <form className="list__form">
                            <div className="list__form-left">
                            <label>List Title</label>
                                <input type="text" placeholder={list.title} />
                                <label>Type</label>
                                <input type="text" placeholder={list.type} />
                                <label>Genre</label>
                                <input type="text" placeholder={list.genre} />
                            </div>

                            <div className="list__form-right">
                                <button className="list__button">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
