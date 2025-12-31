import http from "http";

// Fungsi untuk menangani request
function requestListener(req, res) {
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, Ahmad! Server is running 🚀</h1>");
}

// Membuat server
const server = http.createServer(requestListener);

// Menentukan port
const PORT = 4005;
server.listen(PORT, () => {
  console.log(`✅ Server aktif di http://localhost:4005/`);
});
