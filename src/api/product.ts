import { doc, setDoc } from "firebase/firestore";
import { ProductType } from "../types/ProductType";
import { db } from "./firebase-config";

type NewDocType = {
  username: string | undefined;
  menu: ProductType[];
};

export const syncBothMenus = (
  userId: string | undefined,
  menuUpdated: ProductType[]
) => {
  if (typeof userId !== "string") {
    userId = "";
  }

  const docRef = doc(db, "users", userId);

  const newDoc: NewDocType = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, newDoc);
};
