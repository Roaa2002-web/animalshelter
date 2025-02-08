import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // للوصول إلى Firestore
import { getAuth } from "firebase/auth";  // للوصول إلى Firebase Authentication (اختياري)

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyBXwKYk3QvWMRu7Vo-9OpMqn3z7dMz44iQ",
  authDomain: "animalshelterapi.firebaseapp.com",
  projectId: "animalshelterapi",
  storageBucket: "animalshelterapi.firebasestorage.app",
  messagingSenderId: "175871866784",
  appId: "1:175871866784:web:3bff056f69c14acf7d16c5",
  measurementId: "G-P2SKM83GX7"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الحصول على Firestore و Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };  // تصديرهما لاستخدامهما في باقي أجزاء المشروع
