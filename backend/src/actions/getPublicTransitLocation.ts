import { Transit } from "../models";
import { publicTransits } from "../store";

export function getPublicTransitOnRoute(routeId: string): Transit[] {
  const transits = publicTransits.filter(
    (transit) => transit.routeId === routeId
  );
  return transits;
}
