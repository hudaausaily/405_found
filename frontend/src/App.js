

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Groups from './pages/groups';
import SingleGroup from './pages/singleGroup';
import Profile from './pages/profile'

function App() {
  return (
    <Routes>
    <Route path="/home" element={ <Home/> } />
    <Route path="/" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/singleGroup/:id/show" element={<SingleGroup/>}/>
    <Route path="/profile" element={<Profile/>}/>

  </Routes>
  );
}

export default App;
