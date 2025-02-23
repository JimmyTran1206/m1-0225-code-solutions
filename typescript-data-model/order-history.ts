interface Book {
  isbn: string;
  title: string;
  author: string;
}

interface Order {
  orderNumber: string;
  orderDate: Date;
  total: number;
  shipTo: string;
  items: Book[];
  deliveredDate?: Date;
}

const orderHistory: Order[] = [
  {
    orderNumber: '114-3941689-8772232',
    orderDate: new Date('2020-08-4'),
    total: 31.55,
    shipTo: `JS Masher`,
    items: [
      {
        isbn: '1234',
        title: 'JavaScript for impatient Programmer',
        author: 'Dr. Axel',
      },
    ],
    deliveredDate: new Date('2020-08-08'),
  },
  {
    orderNumber: '113-3941689-1287257',
    orderDate: new Date('2020-07-19'),
    total: 41.33,
    shipTo: `JS Masher`,
    items: [
      {
        isbn: '123456',
        title: 'Timeless way of building',
        author: 'Alexander Christopher',
      },
    ],
    deliveredDate: new Date('2020-08-08'),
  },
];
