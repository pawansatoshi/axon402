import SendUSDC from "./components/tx/send-usdc"
import WalletStatus from "./components/wallet-status"
import NetworkStatus from "./components/network-status"

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">

        <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          AXON402 Infrastructure
        </div>

        <h1 className="mt-8 text-6xl font-bold tracking-tight">
          Learn. Build. Analyze. Execute.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Universal operational intelligence powered by stable blockchain infrastructure.
        </p>

        <WalletStatus />

        <NetworkStatus />

      </section>
      <SendUSDC />

    </main>
  )
}
