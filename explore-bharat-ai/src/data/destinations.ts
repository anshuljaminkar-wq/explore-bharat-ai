// SAMPLE DATA: costs are rough per-person, per-day estimates, not verified prices.
export type Destination = {
  id:string; name:string; state:string; category:string; tagline:string; description:string
  attractions:string[]; food:string[]; bestSeason:string; costPerDay:number; days:number
  gradient:string; popular?:boolean }
export const CATEGORIES = ['Mountains','Beaches','Historical','Wildlife','Spiritual','Adventure']
export const destinations: Destination[] = [
 {id:'jaipur',name:'Jaipur',state:'Rajasthan',category:'Historical',tagline:'The Pink City of forts and bazaars',
  description:'Palaces, hill forts and busy markets make Jaipur an easy first taste of Rajasthan.',
  attractions:['Amber Fort','City Palace','Hawa Mahal','Johari Bazaar'],food:['Dal baati churma','Pyaaz kachori','Lassi'],
  bestSeason:'October to March',costPerDay:3500,days:3,gradient:'from-rose-500 to-orange-400',popular:true},
 {id:'munnar',name:'Munnar',state:'Kerala',category:'Mountains',tagline:'Tea hills wrapped in mist',
  description:'Rolling tea estates, cool air and viewpoints in the Western Ghats.',
  attractions:['Tea plantations','Eravikulam National Park','Mattupetty Dam'],food:['Appam with stew','Kerala sadya','Filter coffee'],
  bestSeason:'September to May',costPerDay:3000,days:3,gradient:'from-emerald-600 to-teal-400',popular:true},
 {id:'goa',name:'South Goa',state:'Goa',category:'Beaches',tagline:'Quieter beaches, slower days',
  description:'Long, calmer beaches, old churches and relaxed cafes away from the north Goa crowds.',
  attractions:['Palolem Beach','Cabo de Rama Fort','Basilica of Bom Jesus'],food:['Fish curry rice','Bebinca','Xacuti'],
  bestSeason:'November to February',costPerDay:4000,days:4,gradient:'from-sky-500 to-cyan-300',popular:true},
 {id:'varanasi',name:'Varanasi',state:'Uttar Pradesh',category:'Spiritual',tagline:'Dawn on the Ganga ghats',
  description:'One of the oldest living cities. Plan around the morning boat ride and evening aarti.',
  attractions:['Dashashwamedh Ghat','Kashi Vishwanath Temple','Sarnath'],food:['Kachori sabzi','Banarasi paan','Malaiyo'],
  bestSeason:'October to March',costPerDay:2500,days:3,gradient:'from-amber-500 to-red-500'},
 {id:'ranthambore',name:'Ranthambore',state:'Rajasthan',category:'Wildlife',tagline:'Tigers among ruined fortresses',
  description:'A tiger reserve with a fort inside it. Safaris must be booked through official channels.',
  attractions:['Jungle safari','Ranthambore Fort','Padam Talao'],food:['Laal maas','Bajra roti','Ghevar'],
  bestSeason:'October to April',costPerDay:5000,days:2,gradient:'from-lime-600 to-yellow-400'},
 {id:'rishikesh',name:'Rishikesh',state:'Uttarakhand',category:'Adventure',tagline:'Rapids, yoga and Himalayan foothills',
  description:'River rafting, bungee and riverside ashrams in one small town.',
  attractions:['River rafting','Laxman Jhula','Beatles Ashram','Ganga aarti at Triveni Ghat'],food:['Aloo puri','Chaat','Chai'],
  bestSeason:'September to November, February to May',costPerDay:2800,days:3,gradient:'from-blue-700 to-indigo-400'}]
