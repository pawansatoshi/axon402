import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore"

import { db } from "./firestore"

export async function saveTransaction(
  data: any
) {

  return await addDoc(
    collection(db, "transactions"),
    {
      ...data,
      createdAt: serverTimestamp()
    }
  )

}

export async function saveAIRequest(
  data: any
) {

  return await addDoc(
    collection(db, "ai_requests"),
    {
      ...data,
      createdAt: serverTimestamp()
    }
  )

}
