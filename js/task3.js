
console.log("3 Обчисліть n-те число Фібоначчі.")
let n = parseInt(prompt("n"))
if (isNaN(n)) {
    alert("Некоректно введені дані")
} else {
    console.log("Введені дані:", n)
    let [f1, f2] = [1, 1]
    for (let i = 1; i < n; i++) {
        let temp = f2
        f2 = f1 + f2
        f1 = temp
    }
    console.log(f2)
}
