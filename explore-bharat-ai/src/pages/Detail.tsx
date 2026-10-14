import { Link, useParams } from 'react-router-dom'
import { destinations } from '../data/destinations'
export default function Detail(){const {id}=useParams();const d=destinations.find(x=>x.id===id)
if(!d)return <p>Destination not found. <Link className="underline" to="/explore">Back to explore</Link></p>
return(<article className="space-y-5"><div className={`rounded-3xl h-48 md:h-64 bg-gradient-to-br ${d.gradient} flex items-end p-6`}>
<h1 className="text-4xl font-extrabold text-white">{d.name}, {d.state}</h1></div>
<p className="text-lg max-w-2xl">{d.description}</p>
<div className="grid md:grid-cols-3 gap-4">
<section className="bg-white rounded-2xl p-4"><h2 className="font-bold mb-2">Top attractions</h2><ul className="list-disc ml-5">{d.attractions.map(a=><li key={a}>{a}</li>)}</ul></section>
<section className="bg-white rounded-2xl p-4"><h2 className="font-bold mb-2">Local food</h2><ul className="list-disc ml-5">{d.food.map(a=><li key={a}>{a}</li>)}</ul></section>
<section className="bg-white rounded-2xl p-4"><h2 className="font-bold mb-2">Good to know</h2><p>Best season: {d.bestSeason}</p><p>Suggested stay: {d.days} days</p><p>Estimate: ₹{d.costPerDay.toLocaleString('en-IN')}/person/day</p></section></div>
<Link to={`/planner?dest=${d.id}`} className="inline-block bg-peacock text-white rounded-full px-6 py-3">Plan a trip to {d.name}</Link></article>)}
