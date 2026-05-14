interface LedgerEntryProps{
  hash:string
  status:string
}

export function LedgerEntry({
  hash,
  status
}:LedgerEntryProps){
  return(
    <div className="infrastructure-panel p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-zinc-500">
            Settlement Hash
          </div>

          <div className="mt-2 font-mono text-sm break-all">
            {hash}
          </div>
        </div>

        <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          {status}
        </div>
      </div>
    </div>
  )
}
