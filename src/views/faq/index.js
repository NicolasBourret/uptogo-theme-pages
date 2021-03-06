import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import Faqs from "./Faqs"
import FaqFilter from './FaqFilter'
import FaqContact from './FaqContact'

import '@styles/base/pages/page-faq.scss'

const Faq = () => {
    const [data, setData] = useState(null),
      [searchTerm, setSearchTerm] = useState('')
  
    const getFAQData = query => {
      return axios.get('/faq/data', { params: { q: query } }).then(response => {
        setData(response.data)
      })
    }
  
    useEffect(() => {
      getFAQData(searchTerm)
    }, [])

    console.log("Grâce aux filtres vous pouvez affiner les résultats obtenus en indiquant les options recherchées: \n \n - \t Le type de véhicules, - \t La localisation, - \t Précisez votre prix, la marque, le modèle, l’énergie… - \t Les options")
  
    return (
      <Fragment>
        <FaqFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} getFAQData={getFAQData} />
        {data !== null ? <Faqs data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
        <FaqContact />
      </Fragment>
    )
  }
  
  export default Faq