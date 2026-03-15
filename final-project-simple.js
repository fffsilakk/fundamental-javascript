/**
 * PROJECT: SISTEM KASIR SEDERHANA
 * Menggabungkan: Array, Object, Arrow Function, forEach, Switch Case,
 * Ternary Operator, dan Template Literals.
 */

// 1. Data Source (Array of Objects)
const keranjang = [
  { produk: "Tas", harga: 50000, jumlah: 1 },
  { produk: "Baju", harga: 30000, jumlah: 2 },
  { produk: "Topi", harga: 15000, jumlah: 0 }, // Contoh stok habis
];

// 2. Fungsi Utama Transaksi
const hitungTransaksi = (daftarBelanja, pakaiDiskon) => {
  let totalBayar = 0;

  console.log("===============================");
  console.log("       RINCIAN BELANJA        ");
  console.log("===============================");

  // A. Iterasi daftar belanja menggunakan forEach
  daftarBelanja.forEach((item) => {
    // Pengecekan stok menggunakan If-Else
    if (item.jumlah > 0) {
      const subTotal = item.harga * item.jumlah;
      totalBayar += subTotal; // Operator Aritmatika (Compound Assignment)

      // Template Literals untuk output yang rapi
      console.log(
        `- ${item.produk.padEnd(7)} | ${item.jumlah} pcs | Rp${subTotal.toLocaleString()}`,
      );
    } else {
      console.log(`- ${item.produk.padEnd(7)} | STOK HABIS`);
    }
  });

  let diskon = 0;
  let hargaAkhir = totalBayar;

  // B. Logika Diskon menggunakan Switch Case
  // .toLowerCase() digunakan agar input tidak case-sensitive
  switch (pakaiDiskon.toLowerCase()) {
    case "iya":
      // Ternary Operator: Syarat diskon jika belanja > 50.000
      diskon = totalBayar > 50000 ? 10000 : 0;
      hargaAkhir = totalBayar - diskon;

      if (diskon === 0) {
        console.log("\n[INFO] Belum mencapai syarat diskon Rp50.000");
      } else {
        console.log("\n[INFO] Selamat! Anda mendapatkan potongan Rp10.000");
      }
      break;

    case "tidak":
      diskon = 0;
      hargaAkhir = totalBayar;
      break;

    default:
      console.log(
        "\n[WARNING] Input diskon tidak valid (gunakan 'iya'/'tidak')",
      );
      diskon = 0;
      hargaAkhir = totalBayar;
      break;
  }

  // 3. Output Final
  console.log("-------------------------------");
  console.log(`TOTAL GROSS  : Rp${totalBayar.toLocaleString()}`);
  console.log(`POTONGAN     : Rp${diskon.toLocaleString()}`);
  console.log("-------------------------------");
  console.log(`TOTAL AKHIR  : Rp${hargaAkhir.toLocaleString()}`);
  console.log("===============================");
  console.log("  Terima Kasih Sudah Belanja!  ");
};

// 4. Eksekusi Program
// Argumen 1: Data keranjang
// Argumen 2: Pilihan diskon ("iya" atau "tidak")
hitungTransaksi(keranjang, "iya");
