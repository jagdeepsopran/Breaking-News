import React, { useEffect, useState } from 'react'
import Home from './component/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './component/individual/News'

const App = () => {
  let [data, setData] = useState();
  useEffect(() => {
    async function news() {
      const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-12-09&to=2024-12-09&sortBy=popularity&apiKey=2a69ad5a546e4f8dbbd36c5a3d2571c9');
      const response = await res.json();
      console.log(response);
      setData(response);
    }
    news();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/news/:index" element={<News data={data} />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App