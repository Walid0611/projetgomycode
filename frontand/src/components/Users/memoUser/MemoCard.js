import React from 'react'
import "./memoCard.css"
import { useNavigate } from 'react-router';
import {deleteContact} from '../../../api/memo'

const MemoCard = ({users,getAllUser}) => {
  console.log(users,'users')
  const navigate=useNavigate()
  const newUpdate=()=>{
navigate(`/update/${users._id}`)
  }
  return (
    
    <div className='hello'>
      <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksokgJCZjjCah4p8mB_pIeKZyIvcuLkFH-ZAUCVgs&s"/>
      </div>
      <div class="contentBx">
       
        <div class="size">
          <h3>model :</h3>
          
        
        </div>
        <div class="color">
          <h3>bookedTimeSLots :</h3>
          
         
        </div>
        <div class="color">
          <h3>totalHours :</h3>
          
        </div>
        <a href="#"><button onClick={()=>newUpdate()}>Update</button></a>
        <a href="#"><button  onClick={async()=>{await deleteContact(users._id);getAllUser()}} >Delete</button></a>

      </div>
    </div>
  </div>
  
  </div>
  
  )
}

export default MemoCard