"use client"

export default function TopLogo() {

  return (
    <div className="fixed top-4 right-4 z-50">

      <div
        className="
        w-28
        h-28
        rounded-[32px]
        overflow-hidden
        bg-[#071028]/95
        border border-cyan-400/30
        backdrop-blur-2xl
        shadow-[0_0_45px_rgba(0,255,255,0.18)]
        flex
        items-center
        justify-center
        p-3
      "
      >

        <img
          src="/logo.png"
          alt="AXON402"
          className="w-full h-full object-contain scale-110"
        />

      </div>

    </div>
  )
}
