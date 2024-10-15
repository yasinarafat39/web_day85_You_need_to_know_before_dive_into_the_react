const numbers = [20, 54, 84, 26, 41, 29]; 
const newNum = [...numbers, 100]
console.log(newNum)


const products = [
    {name: 'Laptop', price: 150000, brand: 'Mac'},
    {name: 'Watch', price: 50000, brand: 'Mac'},
    {name: 'phone', price: 29500, brand: 'Iphone'},
    {name: 'desktop', price: 38400, brand: 'Windows'}
]

const newProducts = [
    ...products, 
    {name: 'printer', price: 18000, brand: 'Epson'}
]

console.log(products)
console.log(newProducts)