import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='w-full h-screen duration-800' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-15 inset-x-5 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl bg-gray-200'>
          
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>setColor("olive")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"olive"}}>Olive</button>

          <button onClick={()=>setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"purple"}}>Purple</button>

          <button onClick={()=>setColor("orange")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"orange"}}>Orange</button>
          
          <button onClick={()=>setColor("black ")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"black"}}>Black</button>
          
          <button onClick={()=>setColor("white")}
           className='outline-none px-4 py-1 rounded-full text-black shadow-sm'
          style={{backgroundColor:"White"}}>White</button>
          
          <button onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-sm'
          style={{backgroundColor:"pink"}}>Pink</button>
          
          <button onClick={()=>setColor("blue")}
           className='outline-none px-4 py-1 rounded-full text-black shadow-sm'
           style={{backgroundColor:"Blue"}}>Blue</button>

        </div>
        </div>
      
        </div>
    </>
  )
}


export default App
