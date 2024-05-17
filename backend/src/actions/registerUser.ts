import { addDoc, collection } from "firebase/firestore";
import { User } from "../models";
import { db } from "../firebase";
import bcrypt from "bcrypt";

export async function LoginUser({
  firstName,
  lastName,
  userName,
  mobileNumber,
  email,
  vehicleNumber,
  password,
  role,
}: User) {
  const encryptedPassword = await bcrypt.hash(password, 10);
  const docRef = await addDoc(collection(db, "users"), {
    firstName,
    lastName,
    userName,
    mobileNumber,
    email,
    vehicleNumber,
    password: encryptedPassword,
    role,
  });
  console.log("Document written with ID: ", docRef.id);
}
