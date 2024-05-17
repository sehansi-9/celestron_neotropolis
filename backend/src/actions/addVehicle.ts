import { addDoc, collection } from "firebase/firestore";
import { Vehicle } from "../models/vechicle";
import { db } from "../firebase";

export async function addVehicle({
  vehicleNumber,
  type,
  model,
  color,
  engineNumber,
  ownerDTP,
}: Vehicle) {
  const docRef = await addDoc(collection(db, "vehicles"), {
    vehicleNumber,
    type,
    model,
    color,
    engineNumber,
    ownerDTP,
  });
  console.log("Document written with ID: ", docRef.id);
  return;
}
