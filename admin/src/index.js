import App from "./App";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <AuthContextProvider>
        <MovieContextProvider>
            <ListContextProvider>
                <App />
            </ListContextProvider>
        </MovieContextProvider>
    </AuthContextProvider>
);
