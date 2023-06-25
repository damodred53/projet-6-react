import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import About from './pages/about/about.jsx';
import Error from './pages/error/error.jsx';
import Logement from './pages/logement/logement.jsx';
import Home from './pages/home/home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/*" element={<Error/>} />
            <Route path="/logement" element={<Logement/>} />
            <Route path="/logement/:id" element={<Logement/>} />
          </Routes>
    </Router>
  </React.StrictMode>
);
const footer = ReactDOM.createRoot(document.getElementById('footer_kasa'));
footer.render(
  <Footer />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
