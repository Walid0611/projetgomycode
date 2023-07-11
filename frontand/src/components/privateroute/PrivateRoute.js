import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAuthUser } from '../../api/authapi';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../Store/authSlice';
import login from '../login/Login';
import Users from '../Users/Users';
import Admin from '../Admin/Admin';
import Navbar from '../navbar/Navbar';
import { fetchMemo } from './../../api/memo';
import Paiment from './../navbar/Paiment';
// import UsresListSlice from '../../Store/UsresListSlice';
// import UserCards from '../Admin/UserCards';


const PrivateRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector(state=> state.auth);

  useEffect(() => {
    const getAuth = async () => {
      const data = await fetchAuthUser();
      console.log('data auth', data);
      dispatch(setAuth(data));
    };

    getAuth();
  }, [dispatch]);

   


  const token = localStorage.getItem('token');
  console.log('token', token);

  // logout
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      {token ? (
        <div>
          <Navbar auth={authUser} logout={logout} />

          {authUser.role === 'Admin' ? <Admin /> : <Users />}
        </div>
      ) : (
        <login />
      )}
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default PrivateRoute;
