const texts = {
  en: {
    Sign_in: "Sign in",
    Email: "Email",
    Password: "Password",
    Remember_me: "Remember me",
    Forgot_your_password: "Forgot your password ?",
    Login: "Login",
    Or_login_with: "Or login with",
    dnt_hv_ac: "Don’t have an account ?",
    Register_now: " Register now",
  },
  fr: {
    Sign_in: "S'identifier",
    Email: "E-mail",
    Password: "Mot de passe",
    Remember_me: "Mémoriser info",
    Forgot_your_password: "Mot de passe oublié ?",
    Login: "Connexion",
    Or_login_with: "Ou connectez-vous avec",
    dnt_hv_ac: "Vous n'avez pas de compte ?",
    Register_now: "S'inscrire maintenant",
  },
};

const GetText = (lang) => {
  if (!lang) {
    return texts.en;
  } else {
    return texts[lang];
  }
};

export default GetText;
