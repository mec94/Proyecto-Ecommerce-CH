import { useState } from 'react'
import './App.css'
import Brand from '../NavBar/Brand'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from './AppRouting'

function App() {
  return (
    <BrowserRouter>
      <div className="App container w-screen h-screen">
        <header className="flex flex-col items-center gap-4">
          <Brand name="CeluShop"/>
          <NavBar />
        </header>
        <main>
          <AppRouting />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
