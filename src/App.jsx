import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import authencationService from './appwrite_services/auth'
import { login, logout } from './configs/authSlice'
import Footer from './components/footer/Footer' // Capitalized
import Header from './components/header/Header' // Capitalized

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authencationService.getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
          console.log("User Found")
        } else {
          dispatch(logout())
          console.log("No user found")
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="App">
      <Header />  {/* ✅ Properly used */}
      <h1>Welcome to My App</h1>
      <Footer />  {/* ✅ Properly used */}
    </div>
  ) : <div>Loading...</div>
}

export default App
