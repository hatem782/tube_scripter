const texts = {
    en: {
        descriptionVideo:"Your previous project",
        createVideo:"Create your next ",
        type:"Library",
        about:"Script generator optimize for long format videos"
    },
  
    fr: {
        descriptionVideo:"Vos anciens projet",
        createVideo:"Créer votre prochain ",
        type:"Bibliothèque",
        about:"générateur de script optimiser pour des vidéos à format long"
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

  
