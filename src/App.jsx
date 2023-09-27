import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}
      >
        <div className='fixed bottom-6 left-5 flex flex-wrap gap-3 items-center justify-center bg-[#696866] p-6 rounded-xl'>
          <button className='bg-black text-white px-3 py-2 rounded-lg' onClick={() => setColor("black")}>Black</button>
          <button className='bg-white text-black px-3 py-2 rounded-lg' onClick={() => setColor("white")}>White</button>
          <button className='bg-red-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("red")}>Red</button>
          <button className='bg-orange-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("orange")}>Orange</button>
          <button className='bg-yellow-500 text-black px-3 py-2 rounded-lg' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-green-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("green")}>Green</button>
          <button className='bg-blue-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("indigo")}>Indigo</button>
          <button className='bg-violet-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("violet")}>Violet</button>
          <button className='bg-pink-800 text-white px-3 py-2 rounded-lg' onClick={() => setColor("pink")}>Pink</button>
          <button className='bg-purple-700 text-white px-3 py-2 rounded-lg' onClick={() => setColor("purple")}>Purple</button>
        </div>
      </div>
    </>
  )
}
export default App
