import App from './App';
import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './context/authContext/AuthContext';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);