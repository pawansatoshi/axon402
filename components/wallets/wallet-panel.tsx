export function WalletPanel(){
  return(
    <div className="infrastructure-panel p-6">
      <div className="text-sm text-zinc-500">
        Wallet Infrastructure
      </div>

      <div className="mt-3 text-2xl font-semibold">
        Turnkey Coordination Ready
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Embedded Wallet
          </span>

          <span className="text-cyan-300">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Arc Network
          </span>

          <span className="text-cyan-300">
            Connected
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Recovery Layer
          </span>

          <span className="text-cyan-300">
            Configured
          </span>
        </div>
      </div>
    </div>
  )
}
