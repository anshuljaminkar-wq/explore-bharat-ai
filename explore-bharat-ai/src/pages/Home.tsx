import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { destinations, CATEGORIES } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

export default function Home() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-peacock text-white p-8 md:p-12">
        <p className="text-sm font-semibold text-[#e5ad3f] mb-3">
          ✨ YOUR NEXT ADVENTURE STARTS HERE
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Your next adventure
          <br />
          starts here. 🌍
        </h1>

        <p className="mt-4 text-white/80 text-lg">
          Less scrolling. More exploring. Find your vibe with JourneyGenie.
        </p>

        <form
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl"
          onSubmit={(e) => {
            e.preventDefault()
            if (q.trim()) navigate(`/explore?q=${encodeURIComponent(q.trim())}`)
            else navigate('/explore')
          }}
        >
          <label htmlFor="s" className="sr-only">
            Search destinations
          </label>

          <input
            id="s"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try Jaipur, Goa or Kerala ✈️"
            className="min-w-0 flex-1 rounded-full bg-white text-slate-900 px-5 py-4 outline-none focus:ring-2 focus:ring-[#e5ad3f]"
          />

          <button
            type="submit"
            className="rounded-full bg-[#e5ad3f] text-slate-900 font-bold px-7 py-4 transition-transform hover:scale-105 active:scale-95"
          >
            Let's Go 🚀
          </button>
        </form>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/10 px-3 py-2">🏖️ Beach vibes</span>
          <span className="rounded-full bg-white/10 px-3 py-2">⛰️ Mountain mode</span>
          <span className="rounded-full bg-white/10 px-3 py-2">💸 Budget trips</span>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#b17b16]">PICK YOUR MOOD ✨</p>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Find Your Vibe
          </h2>
          <p className="mt-1 text-slate-600">
            What kind of trip are we feeling?
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to={`/explore?category=${encodeURIComponent(c)}`}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold transition-all hover:-translate-y-1 hover:border-[#e5ad3f] hover:shadow-md"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-semibold text-[#b17b16]">TRIP INSPIRATION 🔥</p>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Places Worth the Hype
          </h2>
          <p className="mt-1 text-slate-600">
            Your next photo dump starts here. 📸
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations
            .filter((d) => d.popular)
            .map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <p className="text-sm font-semibold text-[#b17b16]">THE PLAN? EASY. 🧭</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
          Main character energy. Sorted itinerary.
        </h2>
        <p className="mt-3 text-slate-600">
          Discover places, plan your route, and keep your budget in check.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/explore"
            className="rounded-full bg-peacock px-6 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            Explore places 🗺️
          </Link>

          <Link
            to="/planner"
            className="rounded-full bg-[#e5ad3f] px-6 py-3 font-bold text-slate-900 transition-transform hover:scale-105"
          >
            Plan my trip ✈️
          </Link>

          <Link
            to="/budget"
            className="rounded-full border border-slate-300 px-6 py-3 font-bold transition-colors hover:bg-slate-50"
          >
            Check my budget 💸
          </Link>
        </div>
      </section>
    </div>
  )
}
