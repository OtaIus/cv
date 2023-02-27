function checkOut(... prices) {
    const total = prices.reduce((acc, curr) => acc + curr)
    console.log(total) // una matriz
}

checkOut(10, 33, 66)
checkOut(10, 33, 66, 56, 92)
