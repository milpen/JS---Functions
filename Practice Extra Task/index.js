function checkYear(year) {
    if (year % 4 === 0) {//шаг 1
        if (year % 100 === 0) {//шаг 2
            if (year % 400 === 0) {//шаг 3
            } else {
            }
        } else {
            return `${year} - високосный год`;//шаг 4
        }
    } else {
        return `${year} - обычный год`;//шаг 5
    }
}
console.log(checkYear(2020));
