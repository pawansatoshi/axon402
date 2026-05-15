import PaymentButton from "@/components/wallets/payment-button"
import AIChat from "@/components/chat/ai-chat"
import LoginButton from "@/components/auth/login-button"
import UserProfile from "@/components/auth/user-profile"
import { WalletConnectPanel as WalletConnect } from "@/components/wallets/wallet-connect"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          <div className="
            lg:col-span-2
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          ">

            <div className="text-6xl font-black tracking-tight">
              AXON402
            </div>

            <div className="text-zinc-400 mt-3 text-lg">
              AI + Wallet + Firebase Workspace
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LoginButton />
              <UserProfile />
            </div>

          </div>

          <WalletConnect />
<PaymentButton />

        </div>

<div className="flex flex-wrap gap-4 mb-6">
<button className="px-6 py-3 rounded-2xl bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)]">Solve Maths</button>
<button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10">Science Quiz</button>
<button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10">Create Workflow</button>
<button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10">Analyze Image</button>
</div>
        <AIChat />

      </div>

    </main>
  )
}
