import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Detail from './pages/Detail'
import Budget from './pages/Budget'
import Planner from './pages/Planner'
export default function App(){return(<Routes><Route element={<Layout/>}>
<Route index element={<Home/>}/><Route path="explore" element={<Explore/>}/><Route path="destination/:id" element={<Detail/>}/>
<Route path="budget" element={<Budget/>}/><Route path="planner" element={<Planner/>}/>
<Route path="*" element={<p>Page not found.</p>}/></Route></Routes>)}
