import TopLogo from "@/components/layout/top-logo"
import { AxonModeProvider } from "@/hooks/use-axon-mode"
import AxonTabs from "@/components/chat/axon-tabs"
import ModeTabs from "@/components/dashboard/mode-tabs"
import PaymentModal from "@/components/payments/payment-modal"
import MembershipCard from "@/components/membership/membership-card"
import PaymentButton from "@/components/wallets/payment-button"
import AIChat from "@/components/chat/ai-chat"
import LoginButton from "@/components/auth/login-button"
import UserProfile from "@/components/auth/user-profile"
import { WalletConnectPanel as WalletConnect } from "@/components/wallets/wallet-connect"

export default function HomePage() {

  return (
    <>

      <TopLogo />

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          <div
            className="
            lg:col-span-2
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
          >

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

        </div>

        <PaymentModal />

        <a
          href="https://faucet.circle.com/"
          target="_blank"
          className="
          inline-flex
          items-center
          justify-center
          px-6
          py-4
          rounded-2xl
          bg-blue-600
          font-semibold
          mb-6
        "
        >
          Claim Circle Faucet
        </a>

        <div className="flex flex-wrap gap-4 mb-6"></div>

        <MembershipCard />

        <AxonModeProvider>

          <AxonTabs />

          <AIChat />

        </AxonModeProvider>

      </div>

    </>
  )
}
