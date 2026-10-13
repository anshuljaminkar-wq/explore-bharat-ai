import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { destinations, CATEGORIES } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
export default function Home(){const [q,setQ]=useState('');const nav=useNavigate()
return(<div className="space-y-10">
<section className="rounded-3xl bg-peacock text-white p-8 md:p-14">
<h1 className="text-4xl md:text-6xl font-extrabold max-w-2xl">Where in India are you going next?</h1>
<form className="mt-6 flex gap-2 max-w-xl" role="search" onSubmit={e=>{e.preventDefault();nav(`/explore?q=${encodeURIComponent(q)}`)}}>
<label htmlFor="s" className="sr-only">Search destinations</label>
<input id="s" value={q} onChange={e=>setQ(e.target.value)} placeholder="Try Jaipur or Kerala" className="flex-1 rounded-full px-5 py-3 text-ink"/>
<button className="bg-turmeric text-ink font-semibold rounded-full px-6">Search</button></form></section>
<section><h2 className="text-2xl font-bold mb-3">Browse by interest</h2><div className="flex flex-wrap gap-2">
{CATEGORIES.map(c=><Link key={c} to={`/explore?cat=${c}`} className="bg-white border rounded-full px-4 py-2 text-sm hover:bg-turmeric/30">{c}</Link>)}</div></section>
<section><h2 className="text-2xl font-bold mb-3">Popular destinations</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
{destinations.filter(d=>d.popular).map(d=><DestinationCard key={d.id} d={d}/>)}</div></section></div>)}
