import { useState } from 'react'
import bgImg01 from "./assets/pexels-ahmed-13326533.jpg"
import bgImg02 from "./assets/pexels-aron-visuals-3596370.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <p className='text-center text-green-500 bold'>
        hello world
      </p>
      <div className='relative'>
        <div className='relative'>
          <div className='h-screen'
          style={{
            backgroundImage: `url(${bgImg01})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
          </div>
          <div className='h-screen'
          style={{
            backgroundImage: `url(${bgImg02})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
