import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './compenent/mainPage/HomePage';
import ContactForm from './compenent/formulaire/ContactForm';
import About from './compenent/about/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/formulaire' element={<ContactForm />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
