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

//2. Map - to display certain key or once for each element in an array

const itemNames = items.map((item) => {
  return item.name
})

console.log(itemNames)

const itemPrice = items.map((item) => {
  return item.price
})

console.log(itemPrice)

//3. find 

const foundItem = items.find((item) => {
  return item.name === 'Book'
})

console.log(foundItem)

//4. forEach

items.forEach((item) => {
  console.log(item.name)
})

//5. some

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})

console.log(hasInexpensiveItems)

//6. every

const checkItems = items.every((item) => {
  return item.price <= 1000
})

console.log(checkItems)

//7. reduce

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

console.log(total)

//8. includes

const numbers = [1, 2, 5, 8]

const includesNum1 = numbers.includes(6) //return false
const includesNum2 = numbers.includes(8) //return true

console.log(includesNum1)
console.log(includesNum2)