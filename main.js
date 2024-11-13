let saldoAwal = Number(prompt("Masukkan saldo awal Anda:"));
let setor = Number(prompt("Masukkan jumlah uang yang ditambahkan:"));
let tarik = Number(prompt("Masukkan jumlah uang yang dikurangkan:"));

// Validasi input
if (isNaN(saldoAwal) || isNaN(setor) || isNaN(tarik)) {
  alert("Input harus berupa angka!");
} else if (tarik > saldoAwal + setor) {
  alert("Jumlah penarikan melebihi saldo!");
} else {
  let saldoAkhir = saldoAwal + setor - tarik;
  alert("Saldo akhir Anda adalah: Rp " + saldoAkhir);
}