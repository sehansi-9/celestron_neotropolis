export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  nic: string;
  firstName: string;
  lastName: string;
  userName: string;
  mobileNumber: string;
  email: string;
  vehicleNumber: string;
  password: string;
  role: UserRole;
};
