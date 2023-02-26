

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/home" element={ <Home/> } />
    <Route path="/" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />

  </Routes>
  );
}

export default App;
