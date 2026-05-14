"use client"

import { useEffect,useState } from "react"

import {
  subscribeLedger
} from "@/services/firebase/firestore-service"

export function useLedger(){

  const [records,setRecords]=
  useState<any[]>([])

  useEffect(()=>{

    const unsubscribe=
    subscribeLedger(setRecords)

    return ()=>unsubscribe()

  },[])

  return records
}
