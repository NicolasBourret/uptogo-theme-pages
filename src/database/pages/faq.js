import mock from '../mock'
const data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCard',
      title: 'COMPTE',
      subtitle: "",
      qandA: [
        {
          question: 'Comment créer mon compte ?',
          ans:
            'Cliquez sur “mon compte” en haut à droite de votre écran, puis sur “Je m’inscris” et renseignez vos coordonnées et identifiants.'
        },
        {
          question: 'Comment modifier mon compte ?',
          ans:
            'Cliquez sur “mon compte” en haut à droite de votre écran, puis sur “mon profil“  Vous accédez ainsi à votre espace personnel, ainsi qu’à vos coordonnées.'
        },
        {
          question: 'Je n’arrive pas à créer mon compte',
          ans:
            'Contactez notre service en envoyant un mail à contact@uptogo.fr en précisant votre difficulté.'
        },
        {
          question: 'Je reçois l’email de confirmation, mais le lien pour activer mon compte ne fonctionne pas. Comment faire ?',
          ans:
            'Si le lien permettant d’activer votre compte ne fonctionne pas, nous vous invitons à nous transférer l’email de confirmation que vous avez reçu à contact@uptogo.fr.'
        },
        {
          question: 'Comment me connecter à mon compte ?',
          ans:
            'Cliquez sur “mon compte” en haut à droite de votre écran puis indiquez votre mail ainsi que votre mot de passe.'
        },
        {
          question: 'Comment désactiver mon compte ?',
          ans:
            'Vous pouvez clôturer de compte en utilisant l’onglet « supprimer mon compte ».'
        },
        {
          question: 'Comment modifier mon mot de passe ?',
          ans:
            'Cliquez sur “mon compte” en haut à droite de votre écran puis « Modifiez votre mot de passe » et cliquez sur Envoyer.'
        },
        {
          question: 'Comment modifier l’adresse email associée à mon compte ?',
          ans:
            'Rendez-vous dans votre « Espace Perso », puis dans Coordonnées et vos Informations de connexion. Modifiez votre email et cliquez sur Envoyer.'
        },
        {
          question: 'Pouvez-vous modifier mes informations personnelles à ma place ?',
          ans:
            'Seul le propriétaire du compte peut accéder à la gestion de ses informations personnelles et modifier le contenu de ses annonces.'
        },
        {
          question: 'Je ne veux pas que mon n° de portable apparaisse ? Comment faire ?',
          ans:
            'C’est un champs à remplir uniquement pour les « Professionnels »; lors du dépôt d’une annonce vous pouvez laisser le champs téléphone vide afin de ne répondre que par email.'
        }
      ]
    },
    // delivery
    delivery: {
      icon: 'ShoppingBag',
      title: 'ANNONCES',
      subtitle: '',
      qandA: [
        {
          question: 'Comment déposer une annonce ?',
          ans:
            'Cliquer sur “déposer mon annonce” , remplir le formulaire avec les informations nécessaires à l’élaboration de l’annonce.'
        },
        {
          question:
            'Si je suis un professionnel, puis je déposer une annonce ?',
          ans:
            'Vous pouvez bien évidemment déposer des annonces et bénéficier d’avantages.'
        },
        {
          question: 'Mon annonce est-elle vraiment gratuite ?',
          ans:
            'OUI , Si vous êtes un particulier, vous pouvez déposer gratuitement votre annonce et opter ou non pour des options de mise en avant. Vous êtes un professionnel.'
        },
        {
          question: 'Comment est validée mon annonce ?',
          ans:
            'Votre annonce sera vérifiée et validée par notre équipe dans un délai de 72 heures après que vous ayez cliqué sur le lien du mail d’activation. Une annonce est refusée lorsqu’elle ne répond pas aux principes de notre charte de modération. L’éditeur se réserve le droit de ne pas diffuser une annonce dont l’aspect ou le contenu est contraire aux conditions générales d’utilisation accessibles depuis le bas de page.'
        },
        {
          question: 'Combien de temps mon reste elle en ligne ?',
          ans:
            'Votre annonce restera en ligne pour une durée de 2 mois. Vous pouvez bien-sûr, pendant cette durée, supprimer votre annonce à tout moment.'
        },
        {
          question: 'Comment puis-je renouveler mon annonce ?',
          ans:
            'Vous pouvez renouveler votre annonce à la fin des 2 mois de parution en vous rendant dans votre « mon compte » dans « mes annonces » et cliquez sur « réactiver votre annonce ».'
        },
        {
          question: 'Pourquoi un message d’erreur s’affiche-t-il ?',
          ans:
            `Notre système affichera un message d’erreur si :
            L’un des champs dans votre annonce est vide ou incorrect. Dans ce cas, veuillez vérifier chacun des champs afin de vous assurer qu’ils soient bien remplis avec les informations nécessaires. L’adresse email ou le mot de passe est incorrect. Veuillez entrer de nouveau votre adresse email complète et votre mot de passe.`
        },
        {
          question: 'Puis-je ajouter des photos ?',
          ans:
            'Vous pouvez ajouter jusqu’à 3 photos à votre annonce. En supplément jusqu’à 10 photos.'
        },
        {
          question: 'Je n’arrive pas à déposer des photos sur mon annonce',
          ans:
            'Les photos doivent impérativement être au format JPEG ou PNG, avec un format paysage et ne doivent pas dépasser une taille de 4mo.'
        },
        {
          question: 'Suis-je limité en nombre de photos ?',
          ans:
            `Vous pouvez ajouter gratuitement jusqu’à 3 photos à votre annonce pour les particuliers.
            Les Professionnels disposent dans l’offre PRO de 10 photos.`
        },
        {
          question: 'Puis je mettre en ligne des annonces non écrites en français ?',
          ans:
            'Non, seules les annonces rédigées en français seront publiées sur notre site.'
        },
        {
          question: 'Mon annonce peut-elle avoir une meilleure position ?',
          ans:
            'Oui vous le pouvez en optant pour une option de mise à la une.'
        },
        {
          question: 'J’ai vendu mon véhicule, puis je suspendre mon annonce ?',
          ans:
            'Il est possible de suspendre votre annonce en vous rendant dans votre Espace Perso dans « mes annonces » et cliquez sur « Suprimer » à côté de l’annonce concernée.'
        },
        {
          question: 'Pourquoi mon annonce a-t-elle été refusée ?',
          ans:
            'Si votre annonce a été refusée, c’est qu’elle ne respectait pas la charte des annonces. Cependant, si vous estimez que votre annonce a été refusée à tort, vous pouvez nous envoyer un mail à contact@uptogo.fr.'
        },
        {
          question: 'Comment retrouver mon annonce ?',
          ans:
            'Rendez-vous sur « mon compte », puis dans la rubrique “mes annonces”.'
        },
        {
          question: 'Est-il possible d’avoir plusieurs annonces sur le même compte ?',
          ans:
            'Vous pouvez publier autant d’annonces que vous le souhaitez. Cependant pour que le site soit agréable pour tous, nous demandons à l’ensemble de nos utilisateurs de ne publier qu’une annonce par offre.'
        },
        {
          question: 'Que se passe-t-il si mon annonce ne respecte pas les conditions ?',
          ans:
            'Si votre annonce ne respecte pas nos conditions de publication, elle ne sera pas publiée. Dans certains cas, l’accès au site sera retiré définitivement pour éviter toute nouvelle publication d’annonces ou envoi de messages.'
        },
        {
          question: 'Je n’ai aucune visite sur mon annonce. Comment cela se fait il ?',
          ans:
            `Plusieurs raisons peuvent expliquer un manque de visibilité.

            Votre publication peut être trop récente. Dans ce cas, attendez quelques jours que les internautes aient le temps de voir votre annonce.`
        },
        {
          question: 'Je clique sur le lien « envoyer un message » mais rien ne se passe ? Que dois-je faire ?',
          ans:
            'Généralement, lorsqu’un lien ou une fonctionnalité ne réagit pas au clic, le problème provient du navigateur que vous utilisez. Pensez à bien effectuer régulièrement les mises à jour de ce dernier.'
        }
      ]
    },
    // cancellation and return
    cancellationReturn: {
      icon: 'RefreshCw',
      title: 'OPTIONS',
      subtitle: '',
      qandA: [
        {
          question: 'Comment recevoir des alertes automatiques ?',
          ans:
            'Pour créer une alerte mail sur votre recherche, il vous suffit d’effectuer une recherche avec l’ensemble des critères puis de cliquer sur « Créer une alerte ».'
        },
        {
          question: 'Comment créer une annonce efficace ?',
          ans:
            `Etre précis et exhaustif dans la description de votre bien. Plus l’annonce sera complète, plus l’acheteur pourra se projeter et visualiser votre véhicule.
            Utiliser des mots clés précis. 
            Intégrer plusieurs photos adaptées à votre texte.
            Donner le plus d’informations de contact possible : email, téléphone et être joignable.`
        },
        {
          question: 'Comment affiner ma recherche ?',
          ans:
            "Grâce aux filtres vous pouvez affiner les résultats obtenus en indiquant les options recherchées: \n \n - \t Le type de véhicules, - \t La localisation, - \t Précisez votre prix, la marque, le modèle, l’énergie… - \t Les options"
        }
      ]
    },
    // my orders
    myOrders: {
      icon: 'Package',
      title: 'MISE EN RELATION',
      subtitle: '',
      qandA: [
        {
          question: 'Comment reconnaitre une annonce frauduleuse ?',
          ans:
            `Renseignez-vous bien sur le produit / service ainsi que sur le vendeur ou le prestataire: 
            - Renseignez-vous sur la personne à laquelle vous avez affaire en confirmant par une autre source son nom, son adresse et son numéro de téléphone.
            - N’hésitez pas à poser des questions à cette personne. 
            - Les affaires qui semblent trop bonnes pour être vraies le sont souvent en définitive. Internet peut vous aider à trouver des prix plus bas, mais il vous appartient d’être vigilant à l’égard des offres anormalement basses. 
            Soyez extrêmement prudent lorsque vous envoyez des informations personnelles à une personne ou une entreprise inconnue (ou même à un site Internet se présentant comme appartenant à une entreprise que vous connaissez).`
        },
        {
          question: 'Que faire en cas d’email douteux ?',
          ans:
            `Méfiez-vous. Si vous recevez des emails en mauvais français ou en anglais vous demandant des coordonnées personnelles, bancaires ou des acomptes, n’y répondez pas ! Il s’agit certainement d’une fraude. 
            Envoyez-nous rapidement une copie à fraude@uptogo.fr pour que nous puissions limiter ces pratiques. 
            Montrez-vous particulièrement vigilant à l’égard des vendeurs et acheteurs à distance : 
            - Ne payez jamais par Western Union ou MoneyGram lorsque vous ne connaissez pas ou n’avez pas confiance en la personne avec laquelle vous traitez (dans la mesure où, quoi que cette personne puisse vous dire, une fois que vous aurez envoyé l’argent, celui-ci ne pourra pas être recouvré). 
            - N’acceptez jamais de paiement additionnel. 
            Nous n’intervenons en aucun cas comme intermédiaire ou tiers de confiance dans les transactions entre acheteurs et vendeurs. Refusez systématiquement tout versement d’argent qui vous serait demandé au nom de notre site.`
        },
        {
          question: 'Que puis-je faire si je soupçonne un vendeur d’agissement frauduleux ?',
          ans:
            `Si vous avez l’impression qu’une annonce sur le site n’est pas conforme ou est frauduleuse, merci de nous contacter à fraude@uptogo.fr. 
            Si vous êtes victime d’une fraude financière ou d’une usurpation d’identité : 
            - Vous devez vous rendre dans le commissariat de police ou la brigade de gendarmerie de votre domicile, pour y déposer plainte. 
            Soucieux de la qualité de notre site Internet, et des offres d’annonces qui le constitue, nous avons mis en place des systèmes de contrôle et d’alerte pour optimiser leur qualité et leur fiabilité. 
            Suivant l’annonce sélectionnée, vous avez accès à des critères de recherche supplémentaires. Ville ou code postal ou département, prix. Ces critères vous permettent de trouver plus facilement un bien correspondant à votre recherche. Cependant, le résultat dépend aussi des informations saisies par l’annonceur. Nous vous conseillons donc d’effectuer plusieurs recherches en modifiant vos critères afin de ne pas passer à côté d’une « affaire »`
        },
        {
          question: 'Dois-je fournir des copies de papiers du véhicule ?',
          ans:
            'Ce n’est pas nécessaire pour poster votre annonce sur uptogo.fr.'
        }
      ]
    }
  }
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
    }
  })

  return [200, filteredData]
})
