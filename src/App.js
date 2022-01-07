import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Hoje from "./components/Hoje";
import Habitos from "./components/Habitos";
import Historico from "./components/Historico";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/hoje' element={<Hoje />} />
          <Route path='/habitos' element={<Habitos />} />
          <Route path='/historico' element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}
