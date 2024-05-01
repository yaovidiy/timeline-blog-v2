export interface Category {
  id: string;
  name: string;
}

export interface Card {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface Timeline {
  id: string;
  date: string;
  image: string;
  title: string;
  description: string;
}

export interface Breadcrumb {
  title: string;
  url: string;
}