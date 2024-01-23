import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import SearchNav from './Components/SearchNav.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [BreakingBad, setBreakingBad] = useState(null)

  return (
    <div className='app'>
      <Header />
      <SearchNav setBreakingBad={setBreakingBad} />
      <Main BreakingBad={BreakingBad} />
      <Footer />
    </div >
  )
}
export default App
