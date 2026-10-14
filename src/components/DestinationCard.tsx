import { Link } from 'react-router-dom'
import type { Destination } from '../data/destinations'
export default function DestinationCard({d}:{d:Destination}){return(
<Link to={`/destination/${d.id}`} className="block rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
<div className={`h-36 bg-gradient-to-br ${d.gradient} flex items-end p-3`}><span className="bg-white/90 text-xs px-2 py-1 rounded-full">{d.category}</span></div>
<div className="p-4"><h3 className="font-bold text-lg">{d.name}, {d.state}</h3><p className="text-sm opacity-75">{d.tagline}</p>
<p className="text-sm mt-2 text-peacock font-semibold">About ₹{d.costPerDay.toLocaleString('en-IN')}/day (estimate)</p></div></Link>)}
