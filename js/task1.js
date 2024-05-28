
console.log("1 У автоматично згенерованому масиві цілих чисел, знайти число, яке зустрічається найчастіше. Якщо таких чисел декілька, то вивести їх всі та вказати їх кількість.")
let s = []
for (let i = 0; i < 20; i++) {
    s.push(Math.floor(Math.random() * 10))
}
console.log("Введені дані: ", s)
let s_ = {}
for (let i of s) {
    if (s_[s[i]] == undefined) {
        s_[s[i]] = 1
    } else {
        s_[s[i]]++
    }
}
let max_ = 0
let count = 0
console.log("Відповідь:")
for (let i of Object.entries(s_)) {
    if (i[1] > max_) max_ = i[1]
} for (let i of Object.entries(s_)) {
    if (i[1] == max_) {
        console.log(i[0])
        count++
    }
}
console.log(count)