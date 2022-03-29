import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';


function Navbar() { 

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="navbar__left">
                    <img
                        className="navbar__left-img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to="/" className="navbar__left-link">
                        <span className="navbar__left-span">Homepage</span>
                    </Link>
                    <Link to="/series" className="navbar__left-link">
                        <span className="navbar__left-span hide-on-tablet">Series</span>
                    </Link>
                    <Link to="/movies" className="navbar__left-link">
                        <span className="navbar__left-span hide-on-tablet">Movies</span>
                    </Link>
                    <span className="navbar__left-span">New and Popular</span>
                    <span className="navbar__left-span">My List</span>
                </div>

                <div className="navbar__right">
                    <Search className="navbar__right-icon" />
                    <span>KID</span>
                    <Notifications className="navbar__right-icon" />
                    <img
                        className="navbar__right-img"
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="navbar__profile">
                        <ArrowDropDown className="navbar__profile-icon" />
                        <div className="navbar__profile-options">
                            <span className="navbar__profile-item">Settings</span>
                            <span className="navbar__profile-item">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;