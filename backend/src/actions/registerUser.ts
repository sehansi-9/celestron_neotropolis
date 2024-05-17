import { addDoc, collection } from "firebase/firestore";
import { User } from "../models";
import { db } from "../firebase";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export async function LoginUser({
  nic,
  firstName,
  lastName,
  userName,
  mobileNumber,
  email,
  vehicleNumber,
  password,
  role,
}: Omit<User, "DTPCode">): Promise<User> {
  const encryptedPassword = await bcrypt.hash(password, 10);
  const DTPCode = nanoid();
  const user: User = {
    nic,
    firstName,
    lastName,
    userName,
    mobileNumber,
    email,
    vehicleNumber,
    password: encryptedPassword,
    role,
    DTPCode,
  };
  const docRef = await addDoc(collection(db, "users"), user);
  console.log("Document written with ID: ", docRef.id);
  return user;
}
