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
import ThemeApp from './exercises/ThemeContextApp'
import AuthApp from './exercises/AuthContextApp'
import ContactForm from './exercises/ContactForm'
import PostList from './exercises/PostList'
import DashboardUsers from './exercises/UserDashboard'

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
      <ThemeApp />
      <AuthApp />
      <ContactForm />
      <PostList />
      <DashboardUsers />
    </>
  )
}

export default App
