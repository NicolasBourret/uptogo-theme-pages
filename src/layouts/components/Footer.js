import { Fragment } from 'react'

const CustomFooter = props => {
  console.log('Footer:', props)
  return <Fragment><footer className="footer padding-h-2 padding-v-2 large-flex">
  <div className="first-column">
    <div className="footer__main-logo">
      <img src={require('@src/assets/images/logo/logo_white.png').default} alt="Logo Uptogo" />
    </div>
    <p>
      Startup créée par 2 passionnés d'automobiles. La première
      Marketplace Automobile Premium
    </p>
  </div>
  <div>
    <h3>Mieux nous connaitre</h3>
    <ul>
      <li>
        <a>- Qui sommes-nous ?</a>
      </li>
      <li>
        <a>- F.A.Q</a>
      </li>
      <li>
        <a>- Offres aux particuliers</a>
      </li>
      <li>
        <a>- Offres aux professionnels</a>
      </li>
      <li>
        <a>- Expertiser un vehicule</a>
      </li>
      <li>
        <a>- Contactez-nous</a>
      </li>
    </ul>
  </div>
  <div>
    <h3>Uptogo 2019</h3>
    <ul>
      <li>
        <a>- Mentions légales</a>
      </li>
      <li>
        <a>- Conditions générales d'utilisation</a>
      </li>
      <li>
        <a>- Politique de confidentialité</a>
      </li>
      <li>
        <a>- Conditions générales de vente</a>
      </li>
    </ul>
  </div>
  <div>
    <h3>Rejoignez-nous!</h3>
    <div>
      <ul className="footer__social-icons">
        <li className="footer__social-icon">
          <img src={require('@src/assets/images/footer/icons/facebook.png').default}/>
        </li>
        <li className="footer__social-icon">
          <img src={require('@src/assets/images/footer/icons/instagram (1).png').default} />
        </li>
        <li>
          <img src={require('@src/assets/images/footer/icons/youtube (1).png').default} />
        </li>
      </ul>
    </div>
    <div className="footer__logos">
      <img
        src={require('@src/assets/images/footer/reseau-entreprendre.fw.png').default}
        className="footer__logo"
      />
      <img src={require('@src/assets/images/footer/logo-bpifrance.png').default} />
    </div>
  </div>
</footer>
</Fragment>
}

export default CustomFooter
