const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItems = items.filter((items) => {
  return items.price <= 100;
});

console.log(filteredItems);

const itemNames = items.map((items) => {
  return items.name;
});

console.log(itemNames);
