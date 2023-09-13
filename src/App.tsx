import { Route , Routes } from 'react-router-dom';
import './App.css';
import  { Header } from './components/Header';
import  { Footer } from './components/Footer';
import  { Home } from './Views/Home/Home';
import { Contact } from './Views/Contact/Contact';
import { About } from './Views/About/About';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
      <Footer />
    </div>
  )
}

export default App

