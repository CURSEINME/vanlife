import { auth, db, storage} from "./firebase";

import { ref, uploadBytes, getDownloadURL, updateMetadata} from "firebase/storage"

import { 
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const vansCollectionRef = collection(db, "vans")

export async function userSignOut() {
  await signOut(auth)
}

export async function getVans() {
  const vansSnapShot = await getDocs(vansCollectionRef)

  const dataArr = vansSnapShot.docs.map(item => ({
    ...item.data(),
    id: item.id
  }))

  return dataArr
}

export async function getVan(id) {
  const vanRef = doc(db, "vans", id)
  const vanSnapShot = await getDoc(vanRef)

  const vanData = {
    ...vanSnapShot.data(),
    id: vanSnapShot.id
  }

  return vanData
}


export async function getHostVan(id) {
  const vanRef = doc(db, "vans", id)
  const vanSnapShot = await getDoc(vanRef)

  const vanData = {...vanSnapShot.data(), id: vanSnapShot.id}

  return vanData
}

export async function getHostVans() {
  const queryCollectionRef = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapShot = await getDocs(queryCollectionRef)

  const queryData = querySnapShot.docs.map(item => ({
    ...item.data(),
    id: item.id
  }))

  return queryData
}

export async function signIn({email, password}) {
  await signInWithEmailAndPassword(auth, email, password)
}

export async function signUp({email, password, nickname, imageUrl}) {

  await createUserWithEmailAndPassword(auth, email, password)

  await updateProfile(auth.currentUser, {
    displayName: nickname,
    photoURL: imageUrl
  })
}