export default function Topbar() {
  return (
    <div className="glass rounded-3xl px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="text-2xl font-black">
          AXON402
        </div>

        <div className="hidden lg:block text-zinc-500">
          AI Operational Workspace
        </div>

      </div>

      <div className="hidden md:flex items-center gap-4">

        <div className="bg-black/40 border border-white/10 rounded-2xl px-5 py-3 w-[320px]">
          Search anything...
        </div>

        <div className="glass w-12 h-12 rounded-2xl flex items-center justify-center">
          🔔
        </div>

        <div className="glass px-5 py-3 rounded-2xl">
          Arjun Verma
        </div>

      </div>

    </div>
  )
}
