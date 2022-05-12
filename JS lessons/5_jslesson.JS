// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const generateArray = (length, max) => (
   [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
);
const numbers = generateArray(10, 40);
console.log(numbers);
console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}
