// src/app/page.tsx

import React from 'react';

// Product type definition
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

// Function to fetch data
const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

// Card component
const Card: React.FC<Product> = ({ title, description, price, thumbnail }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 m-4">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-900 font-semibold">${price}</p>
    </div>
  );
};

// Server component to fetch data and render
const Home = async () => {
  const data = await request('https://dummyjson.com/products');

  return (
    <div>
      <h1 className="text-3xl mb-8">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product: Product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
