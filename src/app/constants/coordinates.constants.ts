import { LngLat, LngLatBounds } from "mapbox-gl";

const SW_GERMANY = new LngLat(5.98865807458, 47.3024876979);
const NE_GERMANY = new LngLat(15.0169958839, 54.983104153);
export const GERMANY_BOUNDS = new LngLatBounds(SW_GERMANY, NE_GERMANY);
export const MAPBOX_TOKEN = 'pk.eyJ1IjoiZDNqYW4yNCIsImEiOiJjbDRtaHAxcDExMzdmM2hueHRuZnRwZjZvIn0.aBbvloMTpcFhVkWv_q2TZw';