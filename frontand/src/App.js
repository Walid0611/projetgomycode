import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Navbar from './components/navbar/Navbar';
import MemoList from './components/Users/memoUser/MemoList';
import BookingCars from './components/Home/BookingCars';
import Home from './components/Home/Home';
import UsersList from './components/Admin/UsersList';


function App() {
  
  return (
    <div className="App">
      <h1>great deal</h1>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/app/PrivateRoute' element={<PrivateRoute/>}/>
        {/* Partie User */}
        <Route path="/memo" element={<MemoList />} />

        {/* Protected routes */}
        <Route path="/MemoList" element={<PrivateRoute component={MemoList} />} />
        <Route path="/booking" element={<PrivateRoute component={BookingCars} />} />
        <Route path="/MemoList" element={<PrivateRoute component={MemoList} />} />

      </Routes>
    </div>
  );
}

export default App;

