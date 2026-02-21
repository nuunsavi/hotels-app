import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import FormularioTradicional from './views/FormularioTradicional'
import './App.css'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/formulario" element={<FormularioTradicional />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
