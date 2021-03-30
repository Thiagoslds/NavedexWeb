import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './hooks/AuthContext';
import Routes from './routes';

//AuthProvider é colocado onde se queira que tenha utilização do contexto
const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </BrowserRouter>
)

export default App;
