import { Location } from "../models/location";
import { publicTransits } from "../store";

export function updatePublicTransitLocation(
  vehicleId: string,
  location: Location
) {
  const transit = publicTransits.find(
    (transit) => transit.vehicleId === vehicleId
  );
  if (!transit) {
    throw new Error(`Transit with vehicleId ${vehicleId} not found`);
  }
  transit.location = location;
}
