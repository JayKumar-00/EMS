import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
  e.preventDefault()

  const createdTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  }

  const updatedData = userData.map(emp => {
    if (emp.firstName === assignTo) {
      return {
        ...emp,
        tasks: [...emp.tasks, createdTask],
        taskSummary: {
          ...emp.taskSummary,
          newTask: emp.taskSummary.newTask + 1
        }
      }
    }
    return emp
  })

  setUserData(updatedData)
  localStorage.setItem('employees', JSON.stringify(updatedData)) // optional if needed

  // Reset form
  setTaskTitle('')
  setTaskDescription('')
  setTaskDate('')
  setAssignTo('')
  setCategory('')
}


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex w-full flex-wrap items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to:</h3>
            <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employee name' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design, dev, etc' />
          </div>
        </div>
        <div className='w-2/5 flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask