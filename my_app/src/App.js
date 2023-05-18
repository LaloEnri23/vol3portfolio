import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (<Router basename='/'>
    <Header />
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
