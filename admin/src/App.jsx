import Home from "./pages/home/Home";
import UserList from "./pages/user/userList/UserList";
import UserInfo from "./pages/user/userInfo/UserInfo";
import MovieList from "./pages/movie/movieList/MovieList";
import MovieEdit from "./pages/movie/movieEdit/MovieEdit";
import MovieAdd from "./pages/movie/movieAdd/MovieAdd";
import ListList from "./pages/list/listList/ListList";
import ListEdit from "./pages/list/listEdit/ListEdit";
import ListAdd from "./pages/list/listAdd/ListAdd";
import Login from "./pages/login/Login";
import NoMatch from "./pages/error/NoMatch";
import NoForbidden from "./pages/error/NoForbidden";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./app.scss";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />

                <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

                <Route path="users" element={user ? <UserList /> : <Navigate to="/login" />} />
                <Route path="/user/:userId" element={user ? <UserInfo /> : <Navigate to="/login" />} />

                <Route path="/movies" element={user ? <MovieList /> : <Navigate to="/login" />} />
                <Route path="/movie/:movieId" element={user ? <MovieEdit /> : <Navigate to="/login" />} />
                <Route path="/movie/add" element={user ? <MovieAdd /> : <Navigate to="/login" />} />
                
                <Route path="/lists" element={user ? <ListList /> : <Navigate to="/login" />} />
                <Route path="/list/:listId" element={user ? <ListEdit /> : <Navigate to="/login" />} />
                <Route path="/list/add" element={user ? <ListAdd /> : <Navigate to="/login" />} />

                <Route
                    path="*"
                    element={<NoMatch />}
                />
            </Routes>
        </Router>
    );
}

export default App;
