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
                    element={user ? <Navigate to="/" /> :<Login />}
                />
                { user && 
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/user/:userId" element={<User />} />
                        <Route path="/newUser" element={<NewUser />} />
                        <Route path="/movies" element={<ProductList />} />
                        <Route  path="/movie/:movieId" element={<Product />} />
                        <Route path="/newproduct" element={<NewProduct />} />
                        <Route path="/lists" element={<ListList />} />
                        <Route path="/list/:listId" element={<List />} />
                        <Route path="/newlist" element={<NewList />} />
                    </>
                }

                <Route path="*" element={user ? <NoMatch /> : <NoForbidden />} />
            </Routes>
        </Router>
    );
}

export default App;
