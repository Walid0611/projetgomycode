import React, { useEffect } from 'react';
import CardUsers from './CardUsers';
import { fetchMemo,deleteContact } from '../../api/memo';
import { useDispatch, useSelector } from 'react-redux';
import { setUsresList } from '../../Store/UsresListSlice';

const UsersList = () => {
 
  const Users = useSelector((state) => state.UserElement);
console.log ('UserElement',Users)

const dispatch = useDispatch();
  const getAllUser = async () => {
    try {
      const data = await fetchMemo();
      console.log("donnees Users:", data.Users)
      dispatch(setListUser(data.Users));
    } catch (err) {
      console.err('Error users:', err);
    }
  };


  const handleDelete = async (userId) => {
    try {
      await deleteContact(userId);
      getAllUser();
    } catch (err) {
      console.err('Error deleting :', err);
    }
  };

 

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      {Users.map((e) => ( <UserCards  miniUser={e}  getAllUser={getAllUser}     deleteContact={deleteContact}  />
      ))}
    </div>
  );
};

export default UsersList;