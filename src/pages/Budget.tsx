import { useState } from 'react'
const init={Stay:1800,Food:800,Transport:600,Activities:500,Miscellaneous:300}
const box="border rounded-lg px-3 py-2 w-32"
export default function Budget(){const [v,setV]=useState<Record<string,number>>(init);const [days,setDays]=useState(3);const [n,setN]=useState(2)
const perDay=Object.values(v).reduce((a,b)=>a+b,0)
return(<div className="max-w-xl"><h1 className="text-3xl font-extrabold mb-1">Budget calculator</h1>
<p className="text-sm opacity-70 mb-4">Per person per day, in rupees. Starting values are rough guesses. Change them to match your plans.</p>
<div className="space-y-3">{Object.keys(v).map(k=><label key={k} className="flex justify-between items-center gap-3">{k}
<input type="number" min={0} value={v[k]} onChange={e=>setV({...v,[k]:Math.max(0,Number(e.target.value))})} className={box}/></label>)}
<label className="flex justify-between items-center">Days<input type="number" min={1} value={days} onChange={e=>setDays(Math.max(1,Number(e.target.value)))} className={box}/></label>
<label className="flex justify-between items-center">Travellers<input type="number" min={1} value={n} onChange={e=>setN(Math.max(1,Number(e.target.value)))} className={box}/></label></div>
<div className="mt-6 rounded-2xl bg-peacock text-white p-5"><p>Per person per day: ₹{perDay.toLocaleString('en-IN')}</p>
<p className="text-2xl font-bold">Trip total: ₹{(perDay*days*n).toLocaleString('en-IN')}</p></div></div>)}
