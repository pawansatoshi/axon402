import AIChat from "@/components/chat/ai-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen text-white p-4 bg-[#050816]">

      <div className="max-w-7xl mx-auto space-y-6">

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/20 backdrop-blur-xl p-6">

          <h1 className="text-5xl font-black">
            Good Evening, Arjun 👋
          </h1>

          <p className="text-zinc-400 mt-3">
            Kya aaj hum kuch solve karein?
          </p>

          <div className="mt-6">
            <input
              placeholder="Ask anything... (Maths, Science, Quiz, Analyze...)"
              className="w-full rounded-2xl bg-black/40 border border-white/10 px-6 py-5 outline-none"
            />
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">

            <button className="px-6 py-4 rounded-2xl bg-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.6)] font-semibold">
              Solve Maths
            </button>

            <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              Science Quiz
            </button>

            <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              Create Workflow
            </button>

            <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              Analyze Image
            </button>

          </div>

        </div>

        <AIChat />

      </div>

    </main>
  )
}
