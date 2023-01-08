import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Dm Abu Hasib',
      email: 'dmabuhasib@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Habib',
      email: 'hadib@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 8,
      brand: 'Adidas',
      rating: 4,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Nike Slim pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 100,
      countInStock: 0,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 14,
      description: 'high quality pant',
    },
    {
      // _id: '4',
      name: 'Adidas Fit pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 200,
      countInStock: 5,
      brand: 'Adidas',
      rating: 3,
      numReviews: 12,
      description: 'high quality pant',
    },
  ],
};

export default data;
