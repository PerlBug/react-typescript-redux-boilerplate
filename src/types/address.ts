export interface IAddress {
  state: string;
  street?: string;
  suburb: string;
  postcode: string;
  country?: string;
  formattedAddress?: string;
  lat?: number;
  lng?: number;
  name?: string;
}
