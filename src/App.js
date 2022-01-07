import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Hoje from './components/Hoje';
import Habitos from './components/Habitos';
import Historico from './components/Historico';

import UserContext from './contexts/UserContext';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(null)

  return (
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
