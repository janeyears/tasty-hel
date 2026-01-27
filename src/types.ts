export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceLevel: "$" | "$$" | "$$$" | "$$$$";
  location: string;
  tags: string[];
  description: string;
  website?: string;
}

