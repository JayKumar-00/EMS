import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { getLocalStorage, seedLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    seedLocalStorage()
  }, [])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser)

    if(loggedInUser){
      const userData  =JSON.parse(loggedInUser)
      // console.log(userData)
      setUser(userData.role)
      if(userData.data){
        setLoggedInUserData(userData.data)
      }
    }
    
  }, [])

  const handleLogin = (email, password)=>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
      }
    }else{
      alert("Invalid Credentials")
    }
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <Admindashboard changeUser={setUser}/> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={userData.find(emp => emp.email === loggedInUserData?.email)} /> : null) }
    </>
  )
}

export default App
