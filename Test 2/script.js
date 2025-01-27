////////////////////// 1

// function extractNumbers(str) {
//     return str.match(/\d/g).map(Number);
// }
// console.log(extractNumbers("a1fg5hj6"));

///////////////////// 2

// function fibonacciWithDelay(prev = 0, curr = 1, limit = 144) {
//     console.log(prev); 
//     if (curr <= limit) { 
//         setTimeout(() => fibonacciWithDelay(curr, prev + curr, limit), 1000);
//     }
// }
// fibonacciWithDelay();



// 3
// async function fetchProducts() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         data.forEach(product => console.log(product.title));
//     } catch (error) {
//         console.error('Ошибка при запросе:', error);
//     }
// }

// fetchProducts();



//////////////////////// 4

// const btnColor = document.getElementById('btn-color')
// btnColor.addEventListener('click', (event) => {
//     if (event.target.textContent) {
//         document.body.style.backgroundColor = event.target.textContent;
//     }
// });




//////////////////// 5
// const button = document.getElementById('toggle-button');
// const square = document.getElementById('square');

// button.onclick = function () {
//     if (square.style.display === 'none') {
//         square.style.display = 'block'; 
//     } else {
//         square.style.display = 'none'; 
//     }
// };




///////////////////// 6

// let count = 0;
// const counter = document.getElementById('counter');

// const interval = setInterval(() => {
//     counter.textContent = count;
//     if (count >= 100) {
//         clearInterval(interval);
//     }
//     count++;
// }, 1);



///////////////////// 7

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Ошибка при запросе:', error);
//     }
// }

// const getBtn = document.getElementById('fetch-button')
// getBtn.addEventListener('click', fetchData);