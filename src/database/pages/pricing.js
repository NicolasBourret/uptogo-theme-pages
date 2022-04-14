import mock from '../mock'

const data = {
  pricing: {
    basicPlan: {
      title: 'Essential',
      img: require('@src/assets/images/illustration/Pot1.svg').default,
      subtitle: 'Pack de 25 annonces',
      monthlyPrice: 590,
      yearlyPlan: {
        perMonth: 0,
        totalAnnual: 0
      },
      planBenefits: [
        '25 annonces',
        'Sans engagement',
        '36 crédits offerts',
        'Modifications illimitées'
      ],
      popular: false
    },
    standardPlan: {
      title: 'Professionnel',
      img: require('@src/assets/images/illustration/Pot2.svg').default,
      subtitle: 'Pack de 50 annonces',
      monthlyPrice: 890,
      yearlyPlan: {
        perMonth: 40,
        totalAnnual: 480
      },
      planBenefits: [
        '50 annonces',
        'Sans engagement',
        '75 crédits offerts',
        'Modifications illimitées'
      ],
      popular: true
    },
    enterprisePlan: {
      title: 'Ultimate',
      img: require('@src/assets/images/illustration/Pot3.svg').default,
      subtitle: 'Pack 100 annonces',
      monthlyPrice: 99,
      yearlyPlan: {
        perMonth: 80,
        totalAnnual: 960
      },
      planBenefits: [
        '100 annonces',
        'Sans engagement',
        '150 crédits offerts',
        'Modifications illimitées'
      ],
      popular: false
    },
    qandA: [
      {
        question: 'La volumétrie ne correspond pas à mes besoins',
        ans:
          'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      },
      {
        question: 'Je ne souhaite pas prolonger l\'offre d\'essaie de 30 jours',
        ans:
          'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
      },
      {
        question: 'Qu\'est-ce que l\'abonnement sans engagement ?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      },
      {
        question: 'Sur quelles plateformes mes annonces seront elles visibles ?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      },
      {
        question: 'Je dispose d\'un multidiffuseur, comment faire ?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      },
      {
        question: 'Je souhaite être prélevé ?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      }
    ]
  }
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
