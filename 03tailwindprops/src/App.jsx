import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400  p-4  text-2xl text-amber-200 rounded-2xl w-30 h-15 m-5'>Tailwind</h1>
    <Card userName="Rikesh" btn="Readmore"/>
    <Card userName="Umang" btn="Visit more"/>
    <Card userName="Kunsh" />
    </>
  )
}

export default App
