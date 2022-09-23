import { useState } from 'react'
import bgImg01 from "./assets/pexels-ahmed-13326533.jpg"
import bgImg02 from "./assets/pexels-aron-visuals-3596370.jpg"
import bgImg03 from "./assets/pexels-kwnos-iv-13600149.jpg"
import BackgroundImage from './components/BackgroundImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <p className='text-center text-green-500 bold'>
        hello world
      </p>
        <div className='relative'>

        <BackgroundImage
            title="test 1"
            img={bgImg01}
          ></BackgroundImage>
          <BackgroundImage
            title="test 2"
            img={bgImg02}
          ></BackgroundImage>
          <BackgroundImage
            title="test 3"
            img={bgImg03}
          ></BackgroundImage>


      </div>
    </div>
  )
}

export default App
