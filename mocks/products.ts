export interface Product {
  id: string;
  title: string;
  slug: string;
  promo: boolean;
  prices: Price[];
  description: string;
  category: Category;
  sport: string;
  tags: string[];
  sizes: string[];
  rating: Rating;
  images: Image[];
  bought: number;
  views: number;
}

export interface Image {
  alt: string;
  id: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface Price {
  date: string;
  price: number;
}

export interface Rating {
  rate: number;
  count: number;
}

export type Category = "Shirts" | "Shorts" | "Shoes" | "Other";
export type Sport =
  | "Football"
  | "Basketball"
  | "Volleyball"
  | "Tennis"
  | "Running";
