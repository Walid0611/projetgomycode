import axios from 'axios'
import Addmemo from './../components/Users/memoUser/Addmemo';




export const fetchMemo= async()=>
{
    const {data}= await axios.get('http://localhost:3006/memos')

return data

}

export const  postMemo=async(values)=>{
    const Addmemo= await axios.post('http://localhost:3006/usermemo/addCars',{...values})
}

export const  updatememo=async(id,values)=>{
const updatememo= await axios.put(`http://localhost:3006/usermemo/updatememo/${id}`,values)
}


export const  deleteContact=async(id)=>{
    const updatememo= await axios.delete(`http://localhost:3006/usermemo/deletememo/${id}`)
    }

    export const getuniquememo=async(id,values)=>{
        const {data} = await axios.get(`/http://localhost:3006/usermemo/getunique/${id}`,values)
  return data
    }