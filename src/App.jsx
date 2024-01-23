import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import SearchNav from './Components/SearchNav.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [author, setAuthor] = useState(null)

  return (
    <div className='app'>
      <Header />
      <SearchNav setAuthor={setAuthor} />
      <Main author={author} />
      <Footer />
    </div >
  )
}
export default App
