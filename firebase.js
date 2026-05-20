// Import các hàm cần thiết từ các SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <-- Chuyển từ Realtime Database sang Cloud Firestore

// Cấu hình Firebase cho Web app của bạn đã đồng bộ chính xác
const firebaseConfig = {
  apiKey: "AIzaSyCmL4xm17D5Q4qNqr91AeZKsE1k-Mt7Ww0",
  authDomain: "rich-farm-7601d.firebaseapp.com",
  projectId: "rich-farm-7601d",
  storageBucket: "rich-farm-7601d.firebasestorage.app",
  messagingSenderId: "801837672034",
  appId: "1:801837672034:web:19a5044501d75df0e2933b",
  databaseURL: "https://rich-farm-7601d-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Firestore (Database đồng bộ của bạn) và export nó
export const db = getFirestore(app);
