'use client'

import { useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'

import {
  useAccount,
  useBalance,
  useDisconnect,
  useSendTransaction
} from 'wagmi'

import { parseEther } from 'viem'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {

  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { address, chainId, isConnected } = useAccount()

  const { disconnect } = useDisconnect()

  const { data } = useBalance({
    address
  })

  const {
    sendTransaction,
    data: txHash
  } = useSendTransaction()

  async function login() {

    try {

      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(
        auth,
        provider
      )

      setUser(result.user)

    } catch (err) {
      console.log(err)
    }
  }

  function sendTestTx() {

    if (!address) return

    sendTransaction({
      to: address,
      value: parseEther('0.00001')
    })
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-black mb-3">
          AXON402
        </h1>

        <p className="text-zinc-400 mb-10">
          Arc Native USDC Infrastructure
        </p>

        <div className="flex gap-4 mb-10">

          <button
            onClick={login}
            className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold"
          >
            Continue with Google
          </button>

          <ConnectButton />
        </div>

        <div className="grid gap-6">

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">
              PIN Protected
            </h2>

            <p className="text-zinc-400">
              Secure transaction authorization layer powered by Turnkey.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">
              Native USDC
            </h2>

            <p className="text-zinc-400">
              Arc-native treasury and wallet infrastructure.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">
              Arc Active
            </h2>

            <p className="text-zinc-400">
              Connected to Arc Testnet settlement layer.
            </p>
          </div>

          {isConnected && (
            <div className="border border-cyan-500/30 rounded-2xl p-6">

              <h2 className="text-3xl font-black mb-6">
                Connected Wallet
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-zinc-500 text-sm">
                    Address
                  </p>

                  <p className="break-all">
                    {address}
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">
                    Chain ID
                  </p>

                  <p>
                    {chainId}
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">
                    Balance
                  </p>

                  <p>
                    {data?.formatted} {data?.symbol}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">

                  <button
                    onClick={sendTestTx}
                    className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold"
                  >
                    Send Test TX
                  </button>

                  <button
                    onClick={() => disconnect()}
                    className="bg-red-500 px-5 py-3 rounded-xl font-semibold"
                  >
                    Disconnect
                  </button>

                </div>

                {txHash && (
                  <div className="pt-6">

                    <p className="text-zinc-500 text-sm mb-2">
                      Transaction Hash
                    </p>

                    <p className="break-all text-green-400">
                      {txHash}
                    </p>

                  </div>
                )}

              </div>
            </div>
          )}

          {user && (
            <div className="border border-cyan-500/30 rounded-2xl p-6">

              <h2 className="text-2xl font-bold mb-4">
                Logged In User
              </h2>

              <img
                src={user.photoURL}
                alt="profile"
                className="w-20 h-20 rounded-full mb-4"
              />

              <p className="text-xl font-semibold">
                {user.displayName}
              </p>

              <p className="text-zinc-400">
                {user.email}
              </p>

            </div>
          )}

        </div>

      </div>

    </main>
  )
}
