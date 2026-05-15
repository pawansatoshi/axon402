"use client"

export default function PaymentSuccess({
  hash,
  explorer
}) {
  return (
    <div className="mt-4 rounded-2xl bg-green-900/30 p-4 text-white">
      <div className="font-bold">
        Payment Successful
      </div>

      <div className="mt-2 text-sm break-all">
        {hash}
      </div>

      <a
        href={explorer}
        target="_blank"
        className="mt-3 block text-cyan-400"
      >
        View Transaction
      </a>
    </div>
  )
}
