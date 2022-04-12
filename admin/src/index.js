import App from './App';
import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AuthContextProvider>
        <MovieContextProvider>
            <App />
        </MovieContextProvider>
    </AuthContextProvider>
);