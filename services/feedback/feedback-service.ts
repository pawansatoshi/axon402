import {
  addDoc,
  collection,
  serverTimestamp,
  getFirestore
} from "firebase/firestore"

import { app }
from "@/lib/firebase"

const db=
getFirestore(app)

export async function submitFeedback(data:any){

  return addDoc(
    collection(db,"feedback"),
    {
      ...data,
      createdAt:
      serverTimestamp()
    }
  )
}
