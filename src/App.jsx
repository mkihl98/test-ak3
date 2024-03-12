import { useState } from 'react'
import ResourceInfo from './components/ResourceInfo'
import Layout from './components/Layout'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path='/ressurser/:id' element={<ResourceInfo />}/>
      </Routes>
    </Layout>
  )
}

export default App
