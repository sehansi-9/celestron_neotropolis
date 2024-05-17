import { collection, getDocs, limit, where } from "firebase/firestore";
import { User } from "../models";
import { db } from "../firebase";
import { query } from "firebase/firestore";

export async function checkUser({
  userName,
  password,
}: {
  userName: string;
  password: string;
}): Promise<User> {
  const q = await query(
    collection(db, "users"),
    where("userName", "==", userName),
    limit(1)
  );
  const user = await getDocs(q);
  if (user.empty) {
    throw new Error("User not found");
  }
  const userData = user.docs[0].data();
  if (userData.password !== password) {
    throw new Error("Password is incorrect");
  }
  return userData as User;
}
