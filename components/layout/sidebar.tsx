export function Sidebar() {
  const items = [
    "Home",
    "Learn",
    "Workflows",
    "Agents",
    "History",
    "Wallet",
    "Observability",
    "Settings",
  ]

  return (
    <aside className="w-[260px] min-h-screen border-r border-white/10 bg-black/30 backdrop-blur-xl p-6 hidden lg:flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500" />
        <div>
          <h1 className="text-2xl font-bold tracking-wide">AXON402</h1>
        </div>
      </div>

      <div className="text-5xl font-black leading-tight bg-gradient-to-b from-violet-400 to-blue-400 bg-clip-text text-transparent">
        AI Powered Operational Intelligence Workspace
      </div>

      <p className="text-zinc-400 mt-6 leading-7 text-sm">
        Yahan aap padhai, kaam, workflows, AI tasks aur payments sab ek hi jagah manage kar sakte hain.
      </p>

      <div className="mt-10 flex flex-col gap-3">
        {items.map((item) => (
          <button
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-violet-500/20 transition-all px-4 py-4 text-left text-white"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-auto text-sm text-zinc-500">
        Built on Arc Testnet
      </div>
    </aside>
  )
}
