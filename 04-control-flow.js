/**
 * MATERI: CONTROL FLOW & ITERATION (DEEP DIVE)
 * Menangani logika program dari yang sederhana hingga efisien (Modern JS).
 */

// --- 1. PENGKONDISIAN (CONDITIONAL) ---

let nilai = 85;
let kehadiran = 90;

// A. Standard If-Else with Logical Operators (&&, ||)
if (nilai >= 75 && kehadiran >= 80) {
  console.log("Status: Lulus Sempurna");
} else if (nilai >= 75 || kehadiran >= 95) {
  console.log("Status: Lulus Bersyarat");
} else {
  console.log("Status: Remedial");
}

// B. Ternary Operator (Shorthand If-Else)
// Sangat sering digunakan dalam React/Framework modern
const hasil = nilai >= 75 ? "Lulus" : "Gagal";
console.log(`Hasil Ternary: ${hasil}`);

// C. Switch Case (Untuk banyak kondisi spesifik)
const role = "ADMIN";
switch (role.toLowerCase()) {
  case "admin":
    console.log("Akses penuh ke Dashboard");
    break;
  case "editor":
    console.log("Akses edit konten");
    break;
  default:
    console.log("Akses tamu");
}

// D. Short-Circuit Evaluation (&& dan ||)
// Teknik pro untuk memberikan nilai default atau eksekusi cepat
const username = "" || "Guest"; // Jika kiri falsy, ambil kanan
const isLogin = true;
isLogin && console.log("User sudah login!"); // Eksekusi jika true

// --- 2. PERULANGAN (ITERATION / LOOPS) ---

const users = ["Alice", "Bob", "Charlie"];

// A. Standard For Loop (Classic)
console.log("--- Standard For ---");
for (let i = 0; i < users.length; i++) {
  console.log(`Index ${i}: ${users[i]}`);
}

// B. For...of (ES6+) - Terbaik untuk Array
// Lebih bersih, tidak perlu index jika tidak butuh
console.log("--- For...of ---");
for (const user of users) {
  console.log(`Halo, ${user}`);
}

// C. For...in - Terbaik untuk Object
// Digunakan untuk mengiterasi Properti/Key dalam Object
const settings = { theme: "dark", notifications: true, lang: "id" };
console.log("--- For...in ---");
for (const key in settings) {
  console.log(`Setting ${key}: ${settings[key]}`);
}

// D. While & Do-While
let counter = 5;
while (counter > 0) {
  console.log(`Countdown: ${counter}`);
  counter--;
}

// E. Break & Continue
console.log("--- Break & Continue ---");
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // Lewati angka 3
  if (i === 6) break; // Berhenti total di angka 6
  console.log(`Angka: ${i}`);
}

/**
 * CATATAN PENTING:
 * Di JavaScript modern, kita lebih sering menggunakan Array Methods
 * seperti .forEach(), .map(), dan .filter() daripada Loop manual.
 * (Materi ini ada di file 08-higher-order-functions.js)
 */
