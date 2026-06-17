import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import BlogPostPage from './pages/BlogPostPage'

const App = () => {
  return (
    <Routes className="app">
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogPostPage />} />  
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App