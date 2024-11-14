
function hitungLuasLingkaran() {
    const radius = document.getElementById("radius").value;
    const luas = Math.PI * radius * radius;
    document.getElementById("resultLingkaran").innerText = "Luas Lingkaran: " + luas.toFixed(2);
}

function hitungLuasSegitiga() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const luas = 0.5 * alas * tinggi;
    document.getElementById("resultSegitiga").innerText = "Luas Segitiga: " + luas.toFixed(2);
}

function hitungLuasPersegiPanjang() {
    const panjang = document.getElementById("panjang").value;
    const lebar = document.getElementById("lebar").value;
    const luas = panjang * lebar;
    document.getElementById("resultPersegiPanjang").innerText = "Luas Persegi Panjang: " + luas.toFixed(2);
}

function hitungLuasJajarGenjang() {
    const alas = document.getElementById("alasJajar").value;
    const tinggi = document.getElementById("tinggiJajar").value;
    const luas = alas * tinggi;
    document.getElementById("resultJajarGenjang").innerText = "Luas Jajar Genjang: " + luas.toFixed(2);
}
