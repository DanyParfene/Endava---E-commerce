export interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
  date: string;
  products: { id: number; number: number }[];
}
