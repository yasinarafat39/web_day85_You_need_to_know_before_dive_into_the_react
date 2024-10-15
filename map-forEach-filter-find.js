const products = [
    {name: 'Laptop', price: 150000, brand: 'Mac'},
    {name: 'Watch', price: 50000, brand: 'Mac'},
    {name: 'phone', price: 29500, brand: 'Iphone'},
    {name: 'desktop', price: 38400, brand: 'Windows'}
]


// Map()
const brands = products.map(product => product.brand)
console.log(brands) // [ 'Mac', 'Mac', 'Iphone', 'Windows' ]

const productNames = products.map(product => product.name)
console.log(productNames) // [ 'Laptop', 'Watch', 'phone', 'desktop' ]


// forEach()
products.forEach(product => console.log(product))



// filter()
const cheap = products.filter(product => product.price < 50000)
console.log(cheap)

const specificName = products.filter(p => p.name.includes('o'))
console.log(specificName)

const withoutWatch = products.filter(p => p.name.toLowerCase() !== 'watch')
console.log(withoutWatch)


// find()
const special = products.find(p => p.name.includes('o'))
console.log(special)