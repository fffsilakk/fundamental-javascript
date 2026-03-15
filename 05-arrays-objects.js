/**
 * MATERI: ARRAYS & OBJECTS (DEEP DIVE)
 * Mengelola struktur data kompleks dan teknik manipulasi modern.
 */

// --- 1. ARRAYS (MANIPULASI DATA LIST) ---

const fruits = ["Apple", "Mango", "Banana"];

// A. Menambah & Menghapus Elemen (Basic)
fruits.push("Orange"); // Tambah di akhir
fruits.unshift("Lemon"); // Tambah di awal
fruits.pop(); // Hapus dari akhir
fruits.shift(); // Hapus dari awal

// B. Mencari Data (Modern)
const hasApple = fruits.includes("Apple"); // true/false
const mangoIndex = fruits.indexOf("Mango");
const findFruit = fruits.find((f) => f.startsWith("M")); // Cari elemen spesifik

// C. Slice vs Splice (Penting!)
// Slice: Mengambil sebagian tanpa mengubah array asli
const someFruits = fruits.slice(0, 2);

// Splice: Mengubah array asli (Hapus, Tambah, atau Ganti)
// (index, jumlah_yang_dihapus, item_baru)
fruits.splice(1, 1, "Watermelon");

console.log("Final Fruits Array:", fruits);

// --- 2. OBJECTS (DATA TERSTRUKTUR & REFERENSI) ---

const user = {
  id: 1,
  username: "dev_user",
  profile: {
    fullName: "Budi Santoso",
    address: "Jakarta, Indonesia",
  },
  hobbies: ["Coding", "Gaming"],
  // Method di dalam Object
  greet() {
    return `Halo, saya ${this.username}`;
  },
};

// A. Accessing Data
console.log(user.profile.fullName); // Dot notation
console.log(user["username"]); // Bracket notation

// B. Optional Chaining (?.) - ANTI ERROR!
// Sangat penting jika data dari API mungkin kosong/null
console.log("Social Media:", user.social?.instagram); // undefined, bukan error

// C. Object Shorthand & Computed Properties
const category = "tech";
const product = {
  id: 101,
  category, // Sama dengan category: category
  [`item_${category}`]: "Laptop", // Dynamic Key
};

// --- 3. MODERN SPREAD & DESTRUCTURING ---

// A. Copy & Merge Array (Immutable)
const moreFruits = ["Grape", "Pineapple"];
const allFruits = [...fruits, ...moreFruits]; // Spread Operator

// B. Copy & Update Object
const updatedUser = {
  ...user,
  username: "super_dev", // Override nilai lama
  status: "Active", // Tambah property baru
};

// --- 4. DATA TRANSFORMATION (Sangat Sering Digunakan) ---

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Monitor", price: 200 },
];

// Mengambil daftar nama saja (Mapping)
const productNames = products.map((p) => p.name);

// Filter produk mahal (> 100)
const expensiveProducts = products.filter((p) => p.price > 100);

console.log("Names:", productNames);
console.log("Expensive:", expensiveProducts);
