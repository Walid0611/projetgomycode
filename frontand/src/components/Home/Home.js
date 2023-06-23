import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import MemoList from '../Users/memoUser/MemoList';



const Home = () => {
  return (
   <div>
   
   <Navbar/>
   <MemoList/>
  
     </div>
  )
}

export default Home




