import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Projects from './pages/projects'
import Work from './pages/work'
import NotFound from './pages/404'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
