import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Hoje from './components/Hoje';
import Habitos from './components/Habitos';
import Historico from './components/Historico';

import UserContext from './contexts/UserContext';
import HabitsContext from './contexts/HabitsTodayContext';
import HabitsHabitsContext from './contexts/HabitsHabitsContext';
import PercentageContext from './contexts/PercentageContext';

import { useState } from 'react';
import TokenContext from './contexts/TokenContext';

export default function App() {
  const [user, setUser] = useState(null);
  const [habits, setHabits] = useState(null);
  const [habitsHabits, setHabitsHabits] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <HabitsContext.Provider value={{ habits, setHabits }}>
          <HabitsHabitsContext.Provider
            value={{ habitsHabits, setHabitsHabits }}
          >
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
          </HabitsHabitsContext.Provider>
        </HabitsContext.Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}
