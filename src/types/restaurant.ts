export interface Restaurant {
  id: string;
  name: string;
  address: string;
  tags: string[];
  description: string;
  website?: string;
  bookingsUrl?: string;
  favorites: string[];
  schedule: {
	day: string;
	open: string;
	close: string;
  }[];
}

