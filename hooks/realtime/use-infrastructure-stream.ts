"use client"

import {
  useEffect,
  useState
} from "react"

import {
  subscribeInfrastructureStream
} from "@/services/realtime/infrastructure-stream"

export function useInfrastructureStream(){

  const [events,setEvents]=
  useState<string[]>([])

  useEffect(()=>{

    const unsubscribe=
    subscribeInfrastructureStream((event)=>{

      setEvents((prev)=>[
        event,
        ...prev
      ].slice(0,8))

    })

    return ()=>unsubscribe()

  },[])

  return events
}
