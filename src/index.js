//1. Filter Method

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 15 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 300 },
  { name: 'Keyboard', price: 45 }
]

const filterItems = items.filter((item) => {
  return item.price <= 100
})

console.log(items)
console.log(filterItems)