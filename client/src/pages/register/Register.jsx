import { useState, useRef } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import "./register.scss";

export default function Register() {

    let navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try {
            await axios.post("auth/register", { username, email, password });
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="register" onContextMenu={handleContextMenu}>
            <div className="register__logo">
                <img
                    className="register__logo-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link to="/login">
                    <button className="register__logo-btn">Đăng nhập</button> 
                </Link>
            </div>

            <div className="register__wrap">
                <h1>Không giới hạn phim, chương trình truyền hình và hơn thế nữa.</h1>
                <h2>Xem ở bất cứ đâu. Hủy bất cứ lúc nào.</h2>
                <p>
                    Sẵn sàng để xem? Nhập email của bạn để tạo hoặc khởi động lại tư cách thành viên của bạn.
                </p>
                {!email ? (
                    <div className="register__form">
                        <input
                            type="email"
                            placeholder="Nhập địa chỉ E-Mail"
                            className="register__input"
                            ref={emailRef}
                        />
                        <button className="register__btn" onClick={handleStart}>Bắt đầu</button>
                    </div>
                ) : (
                    <form className="register__form">
                        <input
                            type="username"
                            placeholder="Nhập tên người dùng"
                            className="register__input"
                            ref={usernameRef}
                        />
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            className="register__input"
                            ref={passwordRef}
                        />
                        <button className="register__btn" onClick={handleFinish}>Đăng ký</button>
                    </form>
                )}
            </div>
        </div>
    );
}
