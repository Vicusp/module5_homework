// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const generateArray = (length, max) => (
   [...new Array(length)]
      .map(() => Math.floor(Math.random() * max))
);
const numbers = generateArray(10, 40);
console.log(numbers);
if (numbers.filter(function (item, index, array) {
   return array.indexOf(item) !== array.lastIndexOf(item);
})) {
   console.log(true)
} else console.log(false);
