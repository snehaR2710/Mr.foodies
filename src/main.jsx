import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './Utils/appStore.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line no-undef
  ReactDOM.createRoot(document.getElementById('root')).render(

      <Provider store={appStore}>
  
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
  
    </Provider>,
  
  )

