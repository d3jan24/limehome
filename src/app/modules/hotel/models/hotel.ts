export interface IHotel {
  id: string;
  title: string;
  address: IAddress;
  position: IPosition;
  distance: number;
}

export interface IAddress {
  label: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  state: string;
  countyCode: string;
  county: string;
  city: string;
  district: string;
}

export interface IPosition {
  lat: number;
  lng: number;
}
