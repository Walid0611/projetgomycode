import React from 'react'
import './memoCard.css'

import MemoList from './MemoList';

const MemoCard = ({mini,getAllCars}) => {

  console.log('mini',mini)
  return (
    <div>
    <MemoList/>
    </div>
    
  )
}

export default MemoCard