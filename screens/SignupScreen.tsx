import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function signUpHandler({ email, password }: any) {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later!"
      );
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating your account..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
