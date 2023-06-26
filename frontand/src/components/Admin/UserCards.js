import React from 'react'

const UserCards = ({miniUser,getAllUser,deleteContact}) => {
    console.log('Cards From mini',miniUser)


  const handleDelete = () => {
    console.log('Deleting user:', miniUser);
  };

  return (
    <div>UserCards</div>
  )
}

export default UserCards