import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../pages/auth/Login'
import HomePage from '../pages/home'
import { PATH } from '../constants/path'
const Router = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.LOGIN} element={<Login />} />
    </Routes>
  )
}

export default Router
