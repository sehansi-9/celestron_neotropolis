import { Location } from "../location";

export type Transit = {
  routeId: string;
  name: string;
  location: Location;
  vehicleId: string;
};
