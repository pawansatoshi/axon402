import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore"

import { app } from "@/lib/firebase"

const db = getFirestore(app)

export async function createLedgerRecord(data:any){

  return addDoc(
    collection(db,"ledger"),
    {
      ...data,
      createdAt:serverTimestamp()
    }
  )
}

export async function createNotification(data:any){

  return addDoc(
    collection(db,"notifications"),
    {
      ...data,
      createdAt:serverTimestamp()
    }
  )
}

export function subscribeLedger(
  callback:(data:any[])=>void
){

  const q=query(
    collection(db,"ledger"),
    orderBy("createdAt","desc")
  )

  return onSnapshot(q,(snapshot)=>{

    callback(
      snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
    )

  })
}

export async function getLedgerRecords(){

  const q=query(
    collection(db,"ledger"),
    orderBy("createdAt","desc")
  )

  const snapshot=await getDocs(q)

  return snapshot.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
  }))
}
