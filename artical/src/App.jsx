import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Homepage from './screens/Homepage';
import { useState } from 'react';

const App = () => {
  const [colors,setColors] = useState("dar");
  return (
    <div theme={colors} className='w-screen  overflow-x-hidden h-screen bg-(--bg-background) text-(--text-main)'>
      <div className='w-full py-2'>
        <h1 className='text-center'>Subscribe to our Newsletter For New & latest Blogs and Resources</h1>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App
