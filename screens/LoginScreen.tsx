import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { logIn } from "../util/auth";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function logInHandler({ email, password }: any) {
    setIsLoading(true);
    try {
      const token = await logIn(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={logInHandler} />;
}

export default LoginScreen;
