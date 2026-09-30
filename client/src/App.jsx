
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import ReviewResume from './pages/ReviewResume'
import RemoveObject from './pages/RemoveObject'
import RemoveBackground from './pages/RemoveBackground'
import GenerateImages from './pages/GenerateImages'
import Community from './pages/Community'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/ai' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path = 'write-article' element = {<WriteArticle />} />
        <Route path = 'blog-titles' element = {<BlogTitles />} />
        <Route path = 'review-resume' element = {<ReviewResume />} />
        <Route path = 'remove-object' element = {<RemoveObject />} />
        <Route path = 'remove-background' element = {<RemoveBackground />} />
        <Route path = 'generate-images' element = {<GenerateImages />} />
        <Route path = 'community' element = {<Community />} />
      </Route>
    </Routes>
  )
}

export default App