
import { createRoot } from 'react-dom/client';

import Home from './Home.jsx';
import'./index.css';



const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <Home />
    </div>
)
