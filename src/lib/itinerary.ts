import type { Destination } from '../data/destinations'
export type TripInput={destination:Destination;startCity:string;days:number;travellers:number;style:'Budget'|'Comfort'|'Luxury'}
export type Day={day:number;title:string;items:string[]}
export type Plan={days:Day[];estimatedTotal:number;disclaimer:string}
const mult={Budget:0.7,Comfort:1,Luxury:1.8}
// Replace this function with a call to a secure server-side AI function later.
export async function generateItinerary(i:TripInput):Promise<Plan>{
  await new Promise(r=>setTimeout(r,600))
  const d=i.destination
  const days=Array.from({length:i.days},(_,n)=>({day:n+1,title:n===0?`Arrive from ${i.startCity||'your city'}`:`Explore ${d.name}`,
    items:[`Visit ${d.attractions[n%d.attractions.length]}`,`Try ${d.food[n%d.food.length]}`,'Free time for local walks and shopping']}))
  return {days,estimatedTotal:Math.round(d.costPerDay*mult[i.style]*i.days*i.travellers),
    disclaimer:'Sample itinerary with rough estimates. Transport, stays and opening hours are not verified. Nothing is booked.'}
}
