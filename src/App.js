import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Hoje from "./components/Hoje";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/hoje' element={<Hoje />} />
      </Routes>
    </BrowserRouter>
  );
}
