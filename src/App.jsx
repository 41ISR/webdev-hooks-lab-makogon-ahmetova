import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import ShelfScreen from './components/ShelfScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <AppHeader />
        <ShelfScreen />
      </div>
    </>
  )
}

export default App
