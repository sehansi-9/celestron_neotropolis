import { addDoc, collection } from "firebase/firestore";
import { ParkingSpace } from "../models/parkingSpcace";
import { db } from "../firebase";

export async function addParkingSpace({
  spaceNumber,
  location,
  slots,
  vehicleNumber,
  ownerDTP,
  parkedVehicles,
}: ParkingSpace): Promise<void> {
  const docRef = await addDoc(collection(db, "parkingSpaces"), {
    spaceNumber,
    location,
    slots,
    vehicleNumber,
    ownerDTP,
    parkedVehicles,
  });
  console.log("Document written with ID: ", docRef.id);
  return;
}
