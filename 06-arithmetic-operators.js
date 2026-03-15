/**
 * MATERI: OPERATOR ARITMATIKA & LOGIKA MATEMATIKA
 * Menjelaskan perhitungan dari dasar hingga manipulasi variabel yang efisien.
 */

// --- 1. OPERATOR STANDAR ---
let a = 10;
let b = 3;

console.log("Penjumlahan (10 + 3):", a + b);
console.log("Pengurangan (10 - 3):", a - b);
console.log("Perkalian (10 * 3):", a * b);
console.log("Pembagian (10 / 3):", a / b);
console.log("Sisa Bagi / Modulo (10 % 3):", a % b); // Hasilnya 1
console.log("Perpangkatan / Exponentiation (10 ** 3):", a ** b); // 10 pangkat 3 = 1000

// --- 2. INCREMENT & DECREMENT (PENTING!) ---
let x = 5;

// Post-increment (Gunakan dulu, baru tambah)
console.log("Post-increment:", x++); // Cetak 5, baru x jadi 6
// Pre-increment (Tambah dulu, baru gunakan)
console.log("Pre-increment:", ++x); // x jadi 7, lalu cetak 7

let y = 5;
console.log("Post-decrement:", y--); // Cetak 5, baru y jadi 4
console.log("Pre-decrement:", --y); // y jadi 3, lalu cetak 3

// --- 3. COMPOUND ASSIGNMENT (Shorthand) ---
// Teknik menulis kode lebih ringkas
let skor = 100;

skor += 50; // Sama dengan: skor = skor + 50
skor -= 20; // Sama dengan: skor = skor - 20
skor *= 2; // Sama dengan: skor = skor * 2
skor /= 4; // Sama dengan: skor = skor / 4

console.log("Total Skor Akhir:", skor);

// --- 4. OPERATOR PERBANDINGAN (Outputnya Boolean) ---
console.log("Sama dengan (Loose):", 5 == "5"); // true (Hanya cek nilai)
console.log("Sama dengan (Strict):", 5 === "5"); // false (Cek nilai & TIPE DATA)
console.log("Tidak sama dengan:", 10 != 5);
console.log("Lebih besar dari:", 10 > 5);

// --- 5. OBJEK MATH (Fungsi Matematika Bawaan) ---
// Sangat berguna untuk manipulasi angka
console.log("Pembulatan Terdekat:", Math.round(4.7)); // 5
console.log("Pembulatan ke Bawah:", Math.floor(4.9)); // 4
console.log("Pembulatan ke Atas:", Math.ceil(4.1)); // 5
console.log("Angka Acak (0-1):", Math.random());
console.log("Nilai Mutlak:", Math.abs(-10)); // 10

/**
 * TIPS PENGAJARAN:
 * Jelaskan kepada murid bahwa operator modulo (%) sangat berguna
 * untuk menentukan apakah sebuah angka itu Ganjil (n % 2 !== 0)
 * atau Genap (n % 2 === 0).
 */
