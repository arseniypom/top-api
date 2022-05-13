export class ProductModel {
  _id: string;
  img: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculateRating: number;
  description: string;
  advantages: string;
  disadvantages: string;
  categories: string[];
  tags: string;
  charachteristics: {
    [key: string]: string;
  };
}
