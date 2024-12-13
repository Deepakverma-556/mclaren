import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyHome from './view/MyHome';
import About from './view/About';
import Features from './view/Features';
import Blogs from './view/Blogs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/features' element={<Features />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
