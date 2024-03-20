"use client"
import React from 'react'
import { useState,useEffect } from 'react'
const page = () => {
  const [count, setCount] = useState(0)
  return (
    <> 
    <div>i am a component {count}</div>
    <button onClick={()=> setCount(count+1)}>Click</button>
   </>
  )
}

export default page
