import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Import Provider from react-redux
import './index.css';
import App from './App.jsx';
import store from './store/store.js'; // ✅ Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* ✅ Capitalized 'Provider' */}
      <App />
    </Provider>
  </StrictMode>
);
