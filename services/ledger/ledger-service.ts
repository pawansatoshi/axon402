import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"

import { app } from "@/lib/firebase"

const db = getFirestore(app)

export async function createLedgerEntry(data: any) {
  return addDoc(collection(db, "ledger"), {
    ...data,
    createdAt: serverTimestamp(),
  })
}

export function subscribeToLedger(callback: (data: any[]) => void) {
  const q = query(
    collection(db, "ledger"),
    orderBy("createdAt", "desc")
  )

  return onSnapshot(q, (snapshot) => {
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  })
}
