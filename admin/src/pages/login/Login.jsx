import { useContext, useState } from "react";
import { login } from '../../context/authContext/ApiCalls';
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };

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
                        placeholder="Nhập Email hoặc số điện thoại"
                        className="login__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="login__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="login__btn"
                        onClick={handleLogin}
                        disabled={isFetching}
                    >
                        Đăng nhập
                    </button>

                    <small>
                        Trang này được bảo vệ bởi reCAPTCHA của Google để đảm bảo
                        bạn không phải là một bot. <b> Tìm hiểu thêm </b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
