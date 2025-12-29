// Membuat program sederhana perulangan dari angka 1-100

// - Jika bisa dibagi 3 tampilkan fizz
// - Jika bisa dibagi 5 jadi buzz
// - Dan jika keduanya bisa dibagi 3 dan 5 maka tampilkan fizzbuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
