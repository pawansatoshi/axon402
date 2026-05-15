export default function MobileMock() {
  return (
    <div className="hidden 2xl:flex flex-col items-center">
      <div className="text-white mb-6 text-lg">
        Mobile Experience
      </div>

      <div className="flex gap-6">

        <div className="w-[220px] h-[440px] rounded-[40px] border border-white/10 bg-black/50 backdrop-blur-xl p-5">
          <div className="text-sm text-zinc-400">
            AXON402
          </div>

          <div className="mt-6 text-2xl font-bold">
            Good Morning, Arjun ☀️
          </div>

          <div className="mt-2 text-zinc-500 text-sm">
            Kya solve karein aaj?
          </div>

          <div className="mt-6 bg-white/5 rounded-2xl p-4">
            Ask anything...
          </div>

          <div className="grid grid-cols-4 gap-3 mt-6 text-center text-xs">
            <div className="bg-white/5 rounded-xl p-3">
              Maths
            </div>

            <div className="bg-white/5 rounded-xl p-3">
              Science
            </div>

            <div className="bg-white/5 rounded-xl p-3">
              Quiz
            </div>

            <div className="bg-white/5 rounded-xl p-3">
              Upload
            </div>
          </div>
        </div>

        <div className="w-[220px] h-[440px] rounded-[40px] border border-white/10 bg-black/50 backdrop-blur-xl p-5">
          <div className="text-center font-semibold">
            Maths Solver
          </div>

          <div className="mt-8 bg-white/5 rounded-3xl p-6 text-center">
            <div className="text-zinc-400">
              Solve for x:
            </div>

            <div className="text-4xl mt-5">
              x² − 5x + 6 = 0
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white/5 rounded-2xl p-4">
              1. Factor equation
            </div>

            <div className="bg-white/5 rounded-2xl p-4">
              2. Apply zero rule
            </div>

            <div className="bg-white/5 rounded-2xl p-4">
              3. Solve x
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
