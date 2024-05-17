import { addDoc, collection } from "firebase/firestore";
import { Route } from "../models/route";
import { db } from "../firebase";

export async function addRoute({
  startLocation,
  endLocation,
  distance,
  estimatedTime,
}: Route) {
  const docRef = await addDoc(collection(db, "routes"), {
    startLocation,
    endLocation,
    distance,
    estimatedTime,
  });
  console.log("Document written with ID: ", docRef.id);
  return;
}
