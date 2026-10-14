import { NavLink, Outlet } from 'react-router-dom'
const links=[['/','Home'],['/explore','Explore'],['/planner','Plan a trip'],['/budget','Budget']]
export default function Layout(){return(<div className="min-h-screen flex flex-col">
<a href="#main" className="sr-only focus:not-sr-only p-2">Skip to content</a>
<header className="bg-peacock text-white"><nav aria-label="Main" className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
<span className="font-display font-extrabold text-xl">https://github.com/anshuljaminkar-wq/explore-bharat-ai/blob/main/explore-bharat-ai/src/components/Layout.tsx <span className="text-turmeric">AI</span></span>
<ul className="flex gap-4 text-sm">{links.map(([to,l])=><li key={to}><NavLink to={to} end={to==='/'} className={({isActive})=>isActive?'underline decoration-turmeric decoration-2 underline-offset-4':'opacity-80 hover:opacity-100'}>{l}</NavLink></li>)}</ul></nav></header>
<main id="main" className="flex-1 max-w-6xl w-full mx-auto px-4 py-6"><Outlet/></main>
<footer className="text-center text-xs py-4 opacity-70">Prototype with sample data. Prices are estimates, not live.</footer></div>)}
