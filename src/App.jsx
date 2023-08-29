import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <div id="container">
          <Navbar />
          <div id="main-section">
            <Routes>
              <Route path='/' element={<AllPlayers />} />
              <Route path='/players/:id' element={<SinglePlayer />} />
              <Route path='/newPlayerForm' element={<NewPlayerForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
