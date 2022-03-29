import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import NoMatch from "./pages/error/NoMatch";
import { useRef, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route index path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies"/> } />
        <Route path="/series" element={<Home type="series"/> } />
        <Route path="/watch" element={<Watch /> } />

        <Route path="*" element={<NoMatch />} />
      </Routes>

      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor2" ref={cursorRef2}></div>
    </Router>
  );
}

export default App;
