import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className='outline-none border-2 bg-transparent border-emerald-600 py-2 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className='outline-none mt-3 border-2 bg-transparent border-emerald-600 py-2 px-5 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='mt-5 text-white outline-none border-none bg-emerald-600 py-3 px-6 text-xl rounded-full placeholder:text-white'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login