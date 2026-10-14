import { useSearchParams } from 'react-router-dom'
import { destinations, CATEGORIES } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
export default function Explore(){const [p,setP]=useSearchParams()
const q=p.get('q')??'',cat=p.get('cat')??'',max=Number(p.get('max')??0)
const list=destinations.filter(d=>(!q||(d.name+d.state).toLowerCase().includes(q.toLowerCase()))&&(!cat||d.category===cat)&&(!max||d.costPerDay<=max))
const set=(k:string,v:string)=>{const n=new URLSearchParams(p);v&&v!=='0'?n.set(k,v):n.delete(k);setP(n)}
return(<div><h1 className="text-3xl font-extrabold mb-4">Explore destinations</h1>
<div className="flex flex-wrap gap-3 mb-6">
<input aria-label="Search" value={q} onChange={e=>set('q',e.target.value)} placeholder="Search" className="border rounded-lg px-3 py-2"/>
<select aria-label="Category" value={cat} onChange={e=>set('cat',e.target.value)} className="border rounded-lg px-3 py-2"><option value="">All interests</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
<select aria-label="Budget" value={max} onChange={e=>set('max',e.target.value)} className="border rounded-lg px-3 py-2"><option value="0">Any budget</option><option value="3000">Up to ₹3,000/day</option><option value="4000">Up to ₹4,000/day</option></select></div>
{list.length?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(d=><DestinationCard key={d.id} d={d}/>)}</div>
:<p className="py-10 text-center">No destinations match. Clear a filter to see more.</p>}</div>)}
