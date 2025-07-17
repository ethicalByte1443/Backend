  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import SignUp from './SignUp'
  import { BrowserRouter, Routes, Route} from 'react-router-dom'
  import Login from './Login'
  function App() {
    

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App
