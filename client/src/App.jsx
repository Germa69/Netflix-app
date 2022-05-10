import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import NoMatch from "./pages/error/NoMatch";

import { useRef, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";


function App() {
    const { user } = useContext(AuthContext);

    const cursorRef = useRef();
    const cursorRef2 = useRef();

    useEffect(() => {
        const handleUserMouseMove = (e) => {
            cursorRef.current.style.cssText = cursorRef2.current.style.cssText =
                "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        };

        window.addEventListener("mousemove", handleUserMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleUserMouseMove);
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/register"
                    element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/" />}
                />

                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/register" />}
                />

                <Route
                    path="/movies"
                    element={
                        user ? (
                            <Home type="movies" />
                        ) : (
                            <Navigate to="/register" />
                        )
                    }
                />
                <Route
                    path="/series"
                    element={
                        user ? (
                            <Home type="series" />
                        ) : (
                            <Navigate to="/register" />
                        )
                    }
                />
                <Route
                    path="/watch"
                    element={user ? <Watch /> : <Navigate to="/register" />}
                />

                <Route path="*" element={<NoMatch />} />
            </Routes>

            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor2" ref={cursorRef2}></div>
        </Router>
    );
}

export default App;
