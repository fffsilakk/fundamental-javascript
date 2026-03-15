/**
 * MATERI: DATA TYPES (DEEP DIVE)
 * Memahami bagaimana JavaScript menyimpan nilai di memori.
 */

// --- 1. PRIMITIVE TYPES (Immutable & Disimpan di Stack) ---

const nama = "Zidny"; // String
const umur = 25; // Number (Bisa bulat atau desimal)
const isCoding = true; // Boolean
const gap = null; // Null (Objek kosong yang disengaja)
let belumDiisi; // Undefined (Variabel dibuat tapi belum ada nilai)

// Fitur Baru ES6+: Symbol (Unik & Tidak Tergantikan)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("Apakah Symbol sama?", id1 === id2); // false (Selalu Unik)

// Fitur Baru ES2020: BigInt (Untuk angka yang sangat besar)
const angkaGede = 9007199254740991n;
console.log(typeof angkaGede); // "bigint"

// --- 2. REFERENCE TYPES (Mutable & Disimpan di Heap) ---

// Object, Array, dan Function sebenarnya adalah 'Object'
const user = { name: "Alex" };
const hobi = ["Music", "Sport"];

console.log(typeof hobi); // "object" (Array adalah bentuk khusus dari Object)

// --- 3. PERBEDAAN KRUSIAL: VALUE vs REFERENCE ---

// Primitive: Copy by Value
let a = 10;
let b = a; // Nilai 10 di-copy ke b
b = 20;
console.log(a); // Tetap 10

// Reference: Copy by Reference (Berbagi alamat memori)
let person1 = { name: "Budi" };
let person2 = person1; // person2 menunjuk ke alamat memori yang sama
person2.name = "Siti";

console.log(person1.name); // Ikut berubah jadi "Siti"!
// (Inilah alasan mengapa kita butuh Spread Operator [...] untuk copy data)

// --- 4. TYPE COERCION (Keunikan JavaScript) ---

console.log("5" + 2); // "52" (Angka diubah jadi string)
console.log("5" - 2); // 3 (String diubah jadi angka)
console.log(false == 0); // true (Loose equality)
console.log(false === 0); // false (Strict equality - SELALU GUNAKAN INI)

/**
 * TIPS: Selalu gunakan === daripada == untuk menghindari
 * bug akibat konversi tipe data otomatis.
 */
