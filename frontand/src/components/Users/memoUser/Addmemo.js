import React,  {useState} from 'react'
import './Addmemo.css'
import {useNavigate} from 'react-router-dom';
import {postMemo} from '../../../api/memo'




const Addmemo = ({updatememo}) => {

  const navigate=useNavigate()
  
  const [model,setModel]=useState('')
  const [bookedTimeSLots,setBookedTimeSLots]=useState('')
  const [image,setImage]=useState('')
  const [totalHours,setTotalHours]=useState('')
  
  
  
 
 const handleAdd= async(value)=>{
  await  postMemo(value)
  navigate('/')
 }
  
  
  
  
  
  return (
    <div>
    
    <section className="get-in-touch">
      <h1 className="title">Add memo</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
            value={model} onChange={(e)=>setModel(e.target.value)}/>
          <label className="label" htmlFor="name"  >
            model
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="time"
            className="input-text js-input"
            type="time"
            required=""   value={bookedTimeSLots} onChange={(e)=>setBookedTimeSLots(e.target.value)}/>
          <label className="label" htmlFor="time">
            bookedTimeSLots
          </label>
        </div>
        <input
  id="image"
  className="input-text js-input"
  type="image"
  required=""
  value={image}
  onChange={(e) => setImage(e.target.value)}
  alt="Image "
/>

        <div className="form-field col-lg-6 ">
          <input
            id="Hours"
            className="input-text js-input"
            type="Hours"
            required=""   value={totalHours} onChange={(e)=>setTotalHours(e.target.value)}/>
          <label className="label" htmlFor="Hours">
            totalHours
          </label>
        </div>

        <div className="form-field col-lg-12">
          <input className="submit-btn" type="button" defaultValue="Add" 
          onClick={()=>handleAdd({model,bookedTimeSLots,image,totalHours})}/>
        </div>


      </form>
    </section>
  
  </div>
  )
}

export default Addmemo