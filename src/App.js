import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Hoje from './components/Hoje';
import Habitos from './components/Habitos';
import Historico from './components/Historico';

import UserContext from './contexts/UserContext';
import HabitsContext from './contexts/HabitsContext';
import PercentageContext from './contexts/PercentageContext';

import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [habits, setHabits] = useState(null);
  const [percentage, setPercentage] = useState([0]);

  return (
    <UserContext.Provider value={{user, setUser}} >
      <PercentageContext.Provider value={{ percentage, setPercentage }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/hoje' element={<Hoje />} />
            <Route path='/habitos' element={<Habitos />} />
            <Route path='/historico' element={<Historico />} />
          </Routes>
        </BrowserRouter>
      </PercentageContext.Provider>
    </UserContext.Provider>
  );
}
