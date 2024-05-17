import { collection, getDocs, limit, where } from "firebase/firestore";
import { User } from "../models";
import { db } from "../firebase";
import bcrypt from "bcrypt";
import { query } from "firebase/firestore";

export async function checkUser({
  userName,
  password,
  DTPCode,
}: {
  userName: string;
  password: string;
  DTPCode: string;
}): Promise<User> {
  const q = await query(
    collection(db, "users"),
    where("DTPCode", "==", DTPCode),
    limit(1)
  );
  const user = await getDocs(q);
  if (user.empty) {
    throw new Error("User not found");
  }
  const userData = user.docs[0].data();
  const isPasswordValid = await bcrypt.compare(password, userData.password);
  if (!isPasswordValid) {
    throw new Error("Password is incorrect");
  }
  return userData as User;
}
