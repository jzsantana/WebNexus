import './index.css'
import { UserProvider } from './service/reducers/AxiosInstance'
import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </React.StrictMode>
);
