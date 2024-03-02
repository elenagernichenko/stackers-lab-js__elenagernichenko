function sumTwoLowest(arr) {
    arr.sort((x, y) => x - y); // сортировка по возрастанию
    return arr[0] + arr[1]; // первые два - наименьшие. возвращаем их сумму
}

console.log(sumTwoLowest([19, 5, 42, 2, 77]));