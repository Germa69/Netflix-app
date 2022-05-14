import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/ApiCalls';
import "./login.scss";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { dispatch } = useContext(AuthContext);

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

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
                    <h1>Đăng nhập</h1>
                    <input
                        type="email"
                        placeholder="Nhập email hoặc số điện thoại"
                        className="login__input"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="login__input"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="login__btn" onClick={handleLogin}>Đăng nhập</button>

                    <span className="login__span">
                        Bạn mới sử dụng Netflix?
                        <Link to="/register" className="login__link">
                            Đăng ký.
                        </Link>
                    </span>

                    <small>
                    Trang này được bảo vệ bởi reCAPTCHA của Google để đảm bảo bạn không phải là bot.<b>Tìm hiểu thêm.</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
