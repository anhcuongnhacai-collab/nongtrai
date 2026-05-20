// Import các hàm cần thiết từ Firebase SDK (Phiên bản Modular v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Cấu hình Firebase dựa trên dự án "Nông Trại Vui Vẻ" của bạn
const firebaseConfig = {
  apiKey: "", // Hệ thống runtime sẽ tự động gán API Key khi khởi chạy ứng dụng
  authDomain: "nong-trai-vui-ve-d9eb7.firebaseapp.com",
  projectId: "nong-trai-vui-ve-d9eb7",
  storageBucket: "nong-trai-vui-ve-d9eb7.firebasestorage.app",
  messagingSenderId: "609351025584",
  appId: "1:609351025584:web:e399eb2dc3bb6975a89ca0"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Xuất ra để sử dụng ở các file khác
export { app, db, auth };