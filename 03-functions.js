/**
 * MATERI: FUNCTIONS (DEEP DIVE)
 * Menjelaskan dari dasar hingga konsep Advanced.
 */

// 1. Function Declaration vs Expression
// Declaration: Terkena Hoisting (bisa dipanggil sebelum dibuat)
console.log(sayHello("Budi"));

function sayHello(name) {
  return `Halo, ${name}!`;
}

// Expression: Tidak terkena hoisting, lebih aman & modular
const sayGoodbye = function (name) {
  return `Selamat tinggal, ${name}`;
};

// 2. Arrow Functions (ES6+)
// Perbedaan utama: Tidak memiliki 'this' sendiri (Lexical This)
const multiply = (a, b) => a * b;
const greetInOneLine = (name) => `Hi ${name}!`; // Shorthand jika 1 parameter

// 3. Default Parameters
// Mencegah error 'undefined' jika argumen lupa diisi
const registerUser = (username = "Guest", role = "Member") => {
  return `User: ${username}, Role: ${role}`;
};

// 4. Anonymous Functions & Callbacks
// Fungsi yang dikirim sebagai argumen ke fungsi lain
const processNumbers = (a, b, callback) => {
  const result = a + b;
  return callback(result);
};

const displayResult = (val) => `Hasil kalkulasi adalah: ${val}`;
console.log(processNumbers(10, 5, displayResult));

// 5. Closures (Konsep Penting!)
// Fungsi yang "mengingat" lingkup (scope) asalnya bahkan setelah dieksekusi
function createCounter() {
  let count = 0; // Private variable
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log("Counter 1:", counter()); // 1
console.log("Counter 2:", counter()); // 2

// 6. IIFE (Immediately Invoked Function Expression)
// Fungsi yang langsung berjalan saat didefinisikan (isolasi scope)
(() => {
  const secret = "Ini tersembunyi";
  console.log("IIFE Berjalan otomatis...");
})();

// 7. Rest Parameters (...)
// Menerima jumlah argumen yang tidak terbatas ke dalam Array
function sumEverything(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Total Rest:", sumEverything(1, 2, 3, 4, 5));
