import axios from "axios";

const API_KEY = "AIzaSyBVmEyid2l_1uhbLoE6MWWHxHbc5S1OgpI";

export async function authenticate(
  mode: string,
  email: string,
  password: string
) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(URL, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data?.idToken;
  return token;
}

export function createUser(email: string, password: string) {
  return authenticate("signUp", email, password);
}

export function logIn(email: string, password: string) {
  return authenticate("signInWithPassword", email, password);
}
