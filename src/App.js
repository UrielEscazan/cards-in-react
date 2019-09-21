import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from "./components/titulo";
import Mensaje from "./components/mensaje"
import Tarjeta from "./components/cards"


function App() {
  return (
  <React.Fragment>
  <Titulo name="The Devil Wears Prada"/>
  <Mensaje message="Dayton, Ohio"/>
  <Mensaje message="Christian Metal core"/>
  <Tarjeta cards/>

  <Titulo name="Chulo"/>
  <Mensaje message="Mi nombre es Chulo"/>

  </React.Fragment>
  );
}

export default App;
