import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { generateItinerary } from '../lib/itinerary'
import type { Plan, TripInput } from '../lib/itinerary'
const f="block w-full border rounded-lg px-3 py-2"
export default function Planner(){const [p]=useSearchParams()
const [dest,setDest]=useState(p.get('dest')??destinations[0].id);const [from,setFrom]=useState('');const [days,setDays]=useState(3)
const [n,setN]=useState(2);const [style,setStyle]=useState<TripInput['style']>('Comfort')
const [plan,setPlan]=useState<Plan|null>(null);const [loading,setLoading]=useState(false);const [err,setErr]=useState('')
const run=async()=>{setLoading(true);setErr('');try{setPlan(await generateItinerary({destination:destinations.find(d=>d.id===dest)!,startCity:from,days,travellers:n,style}))}catch{setErr('Could not create the plan. Please try again.')}finally{setLoading(false)}}
const edit=(i:number,j:number,t:string)=>plan&&setPlan({...plan,days:plan.days.map((d,x)=>x===i?{...d,items:d.items.map((s,y)=>y===j?t:s)}:d)})
return(<div className="grid md:grid-cols-[320px_1fr] gap-8"><div className="space-y-3"><h1 className="text-3xl font-extrabold">Plan a trip</h1>
<label className="block">Starting city<input value={from} onChange={e=>setFrom(e.target.value)} className={f}/></label>
<label className="block">Destination<select value={dest} onChange={e=>setDest(e.target.value)} className={f}>{destinations.map(d=><option key={d.id} value={d.id}>{d.name}</option>)}</select></label>
<label className="block">Days<input type="number" min={1} max={10} value={days} onChange={e=>setDays(Math.min(10,Math.max(1,Number(e.target.value))))} className={f}/></label>
<label className="block">Travellers<input type="number" min={1} value={n} onChange={e=>setN(Math.max(1,Number(e.target.value)))} className={f}/></label>
<label className="block">Travel style<select value={style} onChange={e=>setStyle(e.target.value as TripInput['style'])} className={f}><option>Budget</option><option>Comfort</option><option>Luxury</option></select></label>
<button onClick={run} disabled={loading} className="w-full bg-turmeric font-semibold rounded-full py-3 disabled:opacity-50">{plan?'Regenerate plan':'Create plan'}</button>
{err&&<p role="alert" className="text-lotus">{err}</p>}</div>
<section aria-live="polite">{loading?<p>Building your plan…</p>:plan?<div className="space-y-4">
<p className="text-sm bg-turmeric/20 rounded-lg p-3">{plan.disclaimer}</p>
{plan.days.map((d,i)=><div key={d.day} className="bg-white rounded-2xl p-4"><h2 className="font-bold">Day {d.day}: {d.title}</h2>
{d.items.map((s,j)=><input key={j} aria-label={`Day ${d.day} item ${j+1}`} value={s} onChange={e=>edit(i,j,e.target.value)} className="block w-full border-b py-1 mt-1"/>)}</div>)}
<p className="text-xl font-bold">Estimated total: ₹{plan.estimatedTotal.toLocaleString('en-IN')}</p></div>
:<p className="opacity-70">Fill in the form and choose Create plan. Your itinerary will show up here, and you can edit every line.</p>}</section></div>)}
