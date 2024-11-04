import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { router } from './routes/router';

function App() {
    return (
        <div className="App">
            <Header />
            {/* Otros componentes y contenido */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;