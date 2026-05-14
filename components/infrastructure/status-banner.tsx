export function StatusBanner(){
  return(
    <div className="infrastructure-panel p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-cyan-300">
            ARC TESTNET
          </div>

          <div className="mt-2 text-2xl font-semibold">
            Infrastructure Operational
          </div>

          <div className="mt-2 text-zinc-400">
            Deterministic coordination layer active
          </div>
        </div>

        <div className="h-4 w-4 rounded-full bg-cyan-400 animate-pulse" />
      </div>
    </div>
  )
}
