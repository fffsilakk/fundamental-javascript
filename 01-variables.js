/**
 * MATERI: VARIABLE DECLARATION (VAR, LET, CONST)
 * Memahami Scope, Hoisting, dan Mutability.
 */

// --- 1. VAR (Legacy / Jadul) ---
// Karakteristik: Function Scope & Hoisting
console.log("Var sebelum deklarasi:", namaVar); // undefined (Tidak error karena Hoisting)
var namaVar = "Budi";

if (true) {
  var testVar = "Saya bocor!"; // var tidak peduli dengan block {}
}
console.log(testVar); // Tetap bisa diakses di luar block!

// --- 2. LET & CONST (Modern - ES6+) ---
// Karakteristik: Block Scope & No Hoisting (Temporal Dead Zone)

if (true) {
  let user = "Andi";
  const pi = 3.14;
  console.log(user); // Bisa diakses di dalam sini
}
// console.log(user); // ERROR: user is not defined (Aman dari kebocoran data)

// --- 3. MUTABILITY (PERBEDAAN RIIL LET VS CONST) ---

// A. Let: Re-assignment diperbolehkan
let skor = 10;
skor = 20; // OK

// B. Const: Re-assignment dilarang
const API_KEY = "12345";
// API_KEY = "67890"; // ERROR: Assignment to constant variable

// C. Jebakan Const pada Object & Array (PENTING!)
// Const mengunci "Alamat Memori", bukan "Isi Data"
const keranjang = ["Apel", "Mangga"];
keranjang.push("Pisang"); // BOLEH! Karena alamat memori tetap sama

const config = { theme: "dark" };
config.theme = "light"; // BOLEH!

// config = { theme: "blue" }; // ERROR: Tidak boleh ganti seluruh objeknya
console.log("Isi const keranjang:", keranjang);

// --- 4. BEST PRACTICES ---
/**
 * 1. Gunakan CONST secara default.
 * 2. Gunakan LET hanya jika nilai tersebut akan dihitung ulang (looping, toggle).
 * 3. JANGAN gunakan VAR di proyek modern.
 */
