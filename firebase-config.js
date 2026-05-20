// Import các hàm cần thiết từ Firebase SDK (Phiên bản Modular v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Cấu hình Firebase dựa trên dự án "Nông Trại Vui Vẻ" của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCmL4xml7D5Q4qNqr9lAe2KsE1k-Mt7Ww0",
  authDomain: "rich-farm-7601d.firebaseapp.com",
  databaseURL: "https://rich-farm-7601d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rich-farm-7601d",
  storageBucket: "rich-farm-7601d.firebasestorage.app",
  messagingSenderId: "801837672034",
  appId: "1:801837672034:web:ce1cf41f953a3d5ee2933b"
};


// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Xuất ra để sử dụng ở các file khác
export { app, db, auth };