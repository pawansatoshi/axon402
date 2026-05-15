export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[300px] p-6">

      <div className="glass glow rounded-[36px] p-7 flex flex-col w-full">

        <div>

          <div className="text-4xl font-black tracking-tight">
            AXON402
          </div>

          <div className="text-zinc-500 mt-2">
            AI Operational Workspace
          </div>

        </div>

        <div className="mt-14">

          <h1 className="text-6xl leading-[1.05] font-black bg-gradient-to-b from-violet-400 to-violet-600 bg-clip-text text-transparent">
            AI Powered Operational Intelligence Workspace
          </h1>

          <p className="text-zinc-400 mt-8 leading-8 text-lg">
            Yahan aap padhai, kaam, workflows, AI tasks aur payments —
            sab kuch ek hi jagah manage kar sakte hain.
          </p>

        </div>

        <div className="mt-14 space-y-4">

          <div className="sidebar-item glass rounded-2xl px-5 py-4">
            AI Tutor & Solver
          </div>

          <div className="sidebar-item glass rounded-2xl px-5 py-4">
            Workflow Automation
          </div>

          <div className="sidebar-item glass rounded-2xl px-5 py-4">
            Real-time Monitoring
          </div>

          <div className="sidebar-item glass rounded-2xl px-5 py-4">
            Secure & Onchain Ready
          </div>

        </div>

        <div className="mt-auto pt-10 text-zinc-500">
          Built on Arc Testnet
        </div>

      </div>

    </aside>
  )
}
