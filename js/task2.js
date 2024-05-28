
console.log("2 З клавіатури вводиться текстовий рядок. Скласти скрипт, який підраховує кількість слів у кожному реченні.")
let str = prompt("Рядок")
if (str == "") {
    console.log("Рядок пустий")
} else {
    let words = 1
    let sentences = 1
    console.log("Введені дані:", str)
    for (let i of str) {
        if (".!?".includes(i)) {
            console.log("В", sentences, "реченні", words, "слів")
            words = 0
            sentences++
        } else if (i == " ") {
            words++
        }
    }
    console.log("В", sentences, "реченні", words, "слів")
}