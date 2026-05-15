import { Bell, Search } from "lucide-react"

export function Topbar() {
  return (
    <header className="
      h-20
      border-b
      border-zinc-900
      flex
      items-center
      justify-between
      px-8
    ">
      <div className="
        flex
        items-center
        gap-3
        bg-zinc-900/70
        border
        border-zinc-800
        rounded-2xl
        px-4
        h-12
        w-[420px]
      ">
        <Search size={18} className="text-zinc-500" />

        <input
          placeholder="Search anything..."
          className="
            bg-transparent
            outline-none
            flex-1
            text-sm
            placeholder:text-zinc-500
          "
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="
          w-11
          h-11
          rounded-2xl
          border
          border-zinc-800
          flex
          items-center
          justify-center
          bg-zinc-900/60
        ">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="
            w-11
            h-11
            rounded-full
            bg-gradient-to-br
            from-violet-500
            to-indigo-600
          " />

          <div>
            <p className="text-sm font-medium">
              Arjun Verma
            </p>

            <p className="text-xs text-zinc-500">
              Pro User
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
