// === MEMBUAT SEBUAH KONDISI DIDALAM JAVASCRIPT === //

// - Jika nilai > 90 = A
// - Jika nilai > 70 = B
// - Jika nilai > 60 = C
// - Jika nilai < 60 = D

const nilai = 80;
if (nilai > 90) {
    console.log("A");
} else if (nilai > 70 && nilai <= 90){
    console.log("B");
} else if (nilai > 60 && nilai <= 70) {
    console.log("C");
} else if (nilai < 60 && nilai >= 0) {
    console.log("D");
} else {
    console.log("Nilai tidak valid");
}