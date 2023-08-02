type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: { rate: number; count: number };
};