import Name from "./components/Name"
import Works from "./components/Works"
import './assets/styles/index.scss'
import About from "./components/About"
import { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {
  const containerRef = useRef(null)
  
  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Name />
        <About />
        <Works />
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App
