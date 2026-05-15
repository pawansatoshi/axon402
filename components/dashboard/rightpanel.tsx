export default function RightPanel() {
  return (
    <div className="hidden xl:flex w-[320px] flex-col gap-6">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <div className="text-xl font-bold mb-5">
          Live Operations
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>AI Agent Runner</span>
            <span className="text-green-400">Running</span>
          </div>

          <div className="flex justify-between">
            <span>Workflow Engine</span>
            <span className="text-green-400">Running</span>
          </div>

          <div className="flex justify-between">
            <span>Math Solver</span>
            <span className="text-yellow-400">Idle</span>
          </div>

          <div className="flex justify-between">
            <span>Payment Monitor</span>
            <span className="text-green-400">Running</span>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <div className="text-xl font-bold mb-5">
          System Status
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Arc Network</span>
            <span className="text-green-400">Healthy</span>
          </div>

          <div className="flex justify-between">
            <span>Firebase</span>
            <span className="text-green-400">Healthy</span>
          </div>

          <div className="flex justify-between">
            <span>Turnkey</span>
            <span className="text-green-400">Healthy</span>
          </div>

          <div className="flex justify-between">
            <span>WalletConnect</span>
            <span className="text-green-400">Connected</span>
          </div>
        </div>
      </div>
    </div>
  )
}
