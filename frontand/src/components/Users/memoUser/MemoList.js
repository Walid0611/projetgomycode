import React , {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';



import { fetchMemo } from '../../../api/memo';
import { setMemo }  from '../../../Store/memoSlice'
import MemoCard from './MemoCard';

const MemoList = () => {

  const memo = useSelector (state=>state.memo)
  console.log('memo',memo)

const dispatch = useDispatch()
const getMemo = async()=>{
  const data = await fetchMemo()
 console.log(data,'data get  ')
  dispatch(setMemo(data))
}

useEffect(()=>{
  getMemo()
},[])




  return (
    <div>{
    memo.map( (el)=>(<MemoCard mini={el} />))
    }
    
    </div>
  )
}

export default MemoList