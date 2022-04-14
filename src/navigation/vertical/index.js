import { HelpCircle, DollarSign, CheckCircle } from 'react-feather'

export default [
  {
    id: 'faq',
    title: 'F.A.Q',
    icon: <HelpCircle size={20} />,
    navLink: '/bo/foire-aux-questions'
  },
  {
    id: 'price',
    title: 'Abonnements',
    icon: <DollarSign size={20} />,
    navLink: '/bo/abonnements'
  },
  {
    id: 'cgv',
    title: 'CGV',
    icon: <CheckCircle size={20} />,
    navLink: '/bo/CGV'
  }
]
