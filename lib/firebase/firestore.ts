import { initializeApp, getApps } from "firebase/app"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp(firebaseConfig)

export const db = getFirestore(app)

export async function createUserIfMissing(
  wallet: string
) {

  const ref = doc(db, "users", wallet)

  const snap = await getDoc(ref)

  if (!snap.exists()) {

    await setDoc(ref, {
      wallet,
      credits: 100,
      successfulRequests: 0,
      failedRequests: 0,
      createdAt: serverTimestamp(),
    })

  }

}

export async function deductCredit(
  wallet: string
) {

  const ref = doc(db, "users", wallet)

  await updateDoc(ref, {
    credits: increment(-1),
    successfulRequests: increment(1),
  })

}

export async function failedRequest(
  wallet: string
) {

  const ref = doc(db, "users", wallet)

  await updateDoc(ref, {
    failedRequests: increment(1),
  })

}
