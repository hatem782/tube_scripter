const texts = {
    en: {
        descriptionVideo:"Your previous project",
        createVideo:"Create your next ",
        type:"Library",
        about:"Eye-catching and compelling video descriptions that help your videos rank better"
    },
  
    fr: {
        descriptionVideo:"Vos anciens projet",
        createVideo:"Créer votre prochain ",
        type:"Bibliothèque",
        about:"Des descriptions Vidéo accrocheuses et convaincantes qui permettent de mieux classer vos vidéos"
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

  