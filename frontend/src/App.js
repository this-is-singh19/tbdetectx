import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Predict from './pages/predict';
import About from './pages/about';
import Login from './pages/login';
import Locate from './pages/locate';
import Contact from './pages/contact';
import Chat from './pages/chat';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/predict' element={<Predict />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/locate' element={<Locate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;