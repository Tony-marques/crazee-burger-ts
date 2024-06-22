import { doc, getDoc, setDoc } from "firebase/firestore";
import { fakeMenu } from "../fakeData/fakeMenu";
import { db } from "./firebase-config";

export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
};

export const createUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return;
  }

  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  setDoc(docRef, newDoc);
};

export const authenticateUser = async (userId: string) => {
  const user = await getUser(userId);

  if (!user) {
    createUser(userId);
  }
};
