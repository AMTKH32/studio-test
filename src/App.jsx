import { useState } from 'react'
import Header from './Header_new'
import App_studio from './Studio'
import Footer from './footer_new'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <App_studio/>
   <Footer/>
    </>
  )
}

export default App
