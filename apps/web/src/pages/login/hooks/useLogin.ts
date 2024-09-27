import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../services/firebase";
import { useNavigate } from "@tanstack/react-router";

export default function useLogin() {
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate({
        to: "/",
      });
    } catch (error) {
      // TODO: missing catch
      console.log("error:", error);
    }
  };

  return {
    onLogin,
  };
}
