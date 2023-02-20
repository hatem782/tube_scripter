const texts = {
  en: {
    tast_error1: "passwords are not matching !",
    Create_an_account: "Create an account",
    First_name: "First name",
    Last_name: "Last name",
    Email: "Email",
    Password: "Password",
    Confirm_Password: "Confirm Password",
    Or_login_with: " Or login with ",
    have_an_account: "have an account ? ",
    Login_now: " Login now ",
  },
  fr: {
    tast_error1: "les mots de passe ne correspondent pas !",
    Create_an_account: "Créer un compte",
    First_name: "Prénom",
    Last_name: "Nom de famille",
    Email: "E-mail",
    Password: "Mot de passe",
    Confirm_Password: "Confirmez le mot de passe",
    Or_login_with: "Ou connectez-vous avec",
    have_an_account: "vous avez déjà un compte ?",
    Login_now: "Connectez-vous maintenant",
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

//------ Language Getter in component
// const lang = useSelector((state) => state?.LangReducer?.lang);
// const [text, setText] = useState(GetText(lang));
// useEffect(() => {
//   setText(GetText(lang));
// }, [lang]);
//------ Language Getter in component
