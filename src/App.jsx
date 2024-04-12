import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import Calculadora from './components/calculadora/calculadora';
import { Instrucciones } from './components/instrucciones/instrucciones';
import { Footer } from './components/footer/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Calculadora />} />
          <Route path="instrucciones" element={<Instrucciones />} />
          <Route path="*" element={<Calculadora />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
