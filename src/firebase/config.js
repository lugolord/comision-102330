import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDqAV-ksq7CmOG5s-9PjENHCd8BzbzdumA",
  authDomain: "coder-tienda-back.firebaseapp.com",
  projectId: "coder-tienda-back",
  storageBucket: "coder-tienda-back.firebasestorage.app",
  messagingSenderId: "446132998093",
  appId: "1:446132998093:web:f7e60180d2ab231d097e84"
}

export const app = initializeApp(firebaseConfig)
