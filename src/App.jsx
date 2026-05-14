import { useState } from 'react'
import './App.css'
import SmartCounter from './exercises/SmartCounter'
import RegisterForm from './exercises/RegisterForm'
import UserSearch from './exercises/UserSearch'
import TodoApp from './exercises/TodoApp'
import UserList from './exercises/UserList'
import Timer from './exercises/Timer'
import ShoppingCart from './exercises/ShoppingCart'
import ProductFilter from './exercises/ProductFilter'
import FocusInput from './exercises/FocusInput'
import TaskReducer from './exercises/TaskReducer'

function App() {



  return (
    <>
      <SmartCounter />
      <RegisterForm />
      <UserSearch />
      <TodoApp />
      <UserList />
      <Timer />
      <ShoppingCart />
      <ProductFilter />
      <FocusInput />
      <TaskReducer />
    </>
  )
}

export default App
