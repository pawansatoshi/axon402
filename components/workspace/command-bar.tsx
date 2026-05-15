export function CommandBar() {
  return (
    <div className="
      bg-zinc-900/80
      border
      border-zinc-800
      rounded-3xl
      px-6
      py-5
      backdrop-blur-xl
      shadow-2xl
    ">
      <input
        placeholder="Ask anything, solve maths, generate workflows..."
        className="
          w-full
          bg-transparent
          outline-none
          text-lg
          placeholder:text-zinc-500
        "
      />
    </div>
  )
}
