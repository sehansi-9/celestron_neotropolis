import { Location } from "./location";

export type Route = {
  startLocation: Location;
  endLocation: Location;
  distance: number;
  estimatedTime: number;
};
