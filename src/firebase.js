import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import toast from "react-hot-toast";
import userHandle from "utils/userHandle";

const firebaseConfig = {
  apiKey: "AIzaSyAitCjOXdYc4KiYxbxzSok76-EOOr8SFPk",
  authDomain: "expense-tracker-app-f47c5.firebaseapp.com",
  projectId: "expense-tracker-app-f47c5",
  storageBucket: "expense-tracker-app-f47c5.appspot.com",
  messagingSenderId: "630670212122",
  appId: "1:630670212122:web:0587dd2d172a22f7c925a3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, async user => {
	if (user) {
		userHandle(user)
	} else {
		userHandle(false)
	}
})

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successful");
    return user;
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Registration Successful");
    return user;
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logout Successful");
  } catch (err) {
    toast.error(err.code);
  }
};
