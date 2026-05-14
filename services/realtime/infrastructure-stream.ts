const events = [
  "Settlement finalized",
  "Execution verified",
  "Infrastructure synchronized",
  "Embedded wallet coordinated",
  "Policy integrity validated",
  "Realtime telemetry operational",
  "Arc coordination active",
  "Latency threshold stable"
]

export function subscribeInfrastructureStream(
  callback:(event:string)=>void
){

  const interval=
  setInterval(()=>{

    const random=
    events[
      Math.floor(
        Math.random()*events.length
      )
    ]

    callback(random)

  },3000)

  return ()=>clearInterval(interval)
}
