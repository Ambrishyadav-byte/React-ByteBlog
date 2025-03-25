import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authencationService from './appwrite_services/auth'
import { login,logout } from './configs/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authencationService.getCurrentuser()
      .then((userData)=>{
        if (userData) {
         dispatch(login({userData}))
         console.log("User Found")
        } else {
          dispatch(logout())
          console.log("No user found")
          
        }
      })
      .finally(()=>
      setLoading(false))

  }, [])
  return !loading ? (
    <div className="App">
      <header className="App-header">
        <h1>Appwrite Auth</h1>
        
      </header>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>

    
  ) : <div>Loading...</div>
}

export default App
