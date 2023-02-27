

import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import Groups from './pages/groups';
import SingleGroup from './pages/singleGroup';
import Profile from './pages/profile'
import EditProfile from './pages/editProfile';
import Users from './pages/users';
import CreateGroup from './pages/createGroup';

function App() {
  return (
    <Routes>
    <Route path="/home" element={ <Home/> } />
    <Route path="/users" element={ <Users/> } />
    <Route path="/" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/singleGroup" element={<SingleGroup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/editProfile" element={<EditProfile/>}/>
    <Route path="createGroup" element={<CreateGroup/>}/>

  </Routes>
  );
}

export default App;
