import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
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
import NewList from "./pages/newList/NewList";

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
                <Route path="/user/:userId" element={user ? <User /> : <Navigate to="/login" />} />
                <Route path="newUser" element={user ? <NewUser /> : <Navigate to="/login" />} />

                <Route path="/movies" element={user ? <ProductList /> : <Navigate to="/login" />} />
                <Route path="/movie/:movieId" element={user ? <Product /> : <Navigate to="/login" />} />
                <Route path="/newproduct" element={user ? <NewProduct /> : <Navigate to="/login" />} />
                
                <Route path="/lists" element={user ? <ListList /> : <Navigate to="/login" />} />
                <Route path="/list/:listId" element={user ? <List /> : <Navigate to="/login" />} />
                <Route path="/newlist" element={user ? <NewList /> : <Navigate to="/login" />} />

                <Route
                    path="*"
                    element={user ? <NoForbidden /> : <NoMatch />}
                />
            </Routes>
        </Router>
    );
}

export default App;
