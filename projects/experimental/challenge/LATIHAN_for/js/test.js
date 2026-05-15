// ===== DATABASE =====
const users = [
    { id: 1, name: 'Andi', age: 20 },
    { id: 2, name: 'Budi', age: 22 },
    { id: 3, name: 'Caca', age: 19 }
]


// ===== CREATE =====
users.push({ id: 4, name: 'Doni', age: 25 })

console.log('=== CREATE ===')
console.log(users)


// ===== READ =====
console.log('\n=== READ ===')

users.forEach((item) => {
    console.log(`${item.id} - ${item.name} - ${item.age}`)
})


// ===== UPDATE =====
users.forEach((item) => {
    if (item.id === 2) {
        item.name = 'Budi Santoso'
        item.age = 24
    }
})

console.log('\n=== UPDATE ===')
console.log(users)


// ===== DELETE =====
const hasil = users.filter((item) => {
    return item.id !== 2
})

console.log('\n=== DELETE ===')
console.log(hasil)