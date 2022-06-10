import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AgendaContacto from './components/AgendaContacto';
import AgendaContactoAux from './components/AgendaContactoAux';
import AgendaByApellidoLink from './components/AgendaByApellidoLink';
import Formulario from './components/Formulario';
import Delete from './components/Delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AgendaContacto />} />
      <Route path="/agendaContactoAux" element={<AgendaContactoAux />} />
      <Route path="/getByApellido/:letra" element={<AgendaByApellidoLink />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/formulario/:id" element={<Formulario />} />
      <Route path="/delete/:id" element={<Delete />} />
    </Routes>
  </BrowserRouter>
);

