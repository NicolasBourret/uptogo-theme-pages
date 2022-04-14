import { Fragment } from "react"
import { 
  Row, 
  Col, 
  Card, 
  CardText 
} from "reactstrap"

const CGV = () => {
  return (
    <Fragment>
      <Row className="container">
        <Col>
          <Card className="p-2">
            <h2>Conditions Générales d’Utilisation</h2>
            <CardText className="mt-2">
              Les présentes conditions générales d'utilisation du site (les «conditions d'utilisation») entrent en vigueur le 1er octobre 2019.
              En s'inscrivant sur le site et / ou en utilisant uptogo.fr (tel que défini ci-dessous), les utilisateurs (tels que définis ci-dessous) acceptent les présentes conditions d'utilisation du site Web.
            </CardText>
            <h3 className="mt-2">ARTICLE 1 PRESENTATION</h3>
            <CardText className="mt-2">
              1. UPTOGO MEDIAS gère des bases de données accessibles via le site et l'application mobile associée dans lesquelles les utilisateurs « Professionnels »
              (concessionnaires ou marchands) et les utilisateurs « Particuliers » (non professionnels) peuvent annoncer la vente de véhicules, ainsi que la recherche
              de véhicules par le biais de la fonction appropriée proposée par uptogo.fr.<br />
              2. UPTOGO MEDIAS fournit uniquement la plate-forme via laquelle la base de données contenant les annonces est gérée, sans aucun contrôle sur le
              contenu des annonces publiées. En particulier, UPTOGO MEDIAS ne représente pas le « Professionnel » qui vend les véhicules, ni le « Particulier »
              enregistré qui vend les véhicules au moyen d’annonces ou publicités placées dans la base de données UPTOGO MEDIAS.<br />
              3. UPTOGO MEDIAS ne participe en aucune manière aux accords et à tout type de communication et / ou de négociation entre la partie qui a inséré
              l'annonce dans la base de données UPTOGO MEDIAS et la partie intéressée dans l'achat, ni en tant qu'intermédiaire, ni en tant qu'agent ou
              représentant des parties. Les accords et les négociations découlant d'une publicité ou annonce contenue dans la base de données UPTOGO MEDIAS
              ne se font en aucune manière par le biais du site et / ou de l'application mobile correspondante. UPTOGO MEDIAS n'est en aucun cas impliqué dans
              ceux-ci.<br />
              4. UPTOGO MEDIAS, acheteurs, vendeurs et utilisateurs agissent en toute autonomie et indépendance. Les présentes conditions générales ne donnent
              lieu à aucune relation de collaboration, d'agence, d'association, d'intermédiation ou d'emploi.
            </CardText>
            <h3 className="mt-2">ARTICLE 2 OBJET DU SERVICE</h3>
            <CardText className="mt-2">
              1. UPTOGO MEDIAS fournit aux utilisateurs enregistrés une page Web accessible via le site Web et / ou l'application mobile correspondante pour la
              création et la publication de publicités et annonces pour la vente de véhicules et les rend accessibles au public. Les graphismes et le fonctionnement
              des pages du site peuvent varier selon que l'accès au site uptogo.fr est effectué via le site ou via l'application mobile correspondante.<br />
              2. La publication d'annonces de vente de véhicules par les « Professionnels » ou « Particuliers » sera possible moyennant le paiement d'une annonce.<br />
              3. UPTOGO MEDIAS assure la promotion du site uptogo.fr et des annonces et publicités publiées par les utilisateurs enregistrés, également par
              l'intermédiaire de tiers, notamment en publiant tout ou partie de la publicité sur d'autres sites Web dans des applications logicielles, courriels ou
              campagnes publicitaires dans les journaux, les stations de radio ou de télévision. À cette fin, UPTOGO MEDIAS autorise ces tiers à accéder aux
              données, aux informations et au contenu du site uptogo.fr. Toutefois, l'utilisateur enregistré peut être soumis aux lois et limitations supplémentaires
              requises par la législation du pays dans lequel l'annonce sera publiée. Nous nous réservons le droit de supprimer la liste si elle a été signalée sur l'un
              des autres sites ou si elle enfreint les lois applicables ou les règles du site.
            </CardText>
            <h3 className="mt-2">ARTICLE 3 ENREGISTREMENT DE L’UTILISATEUR ET GESTION DU COMPTE</h3>
            <CardText className="mt-2">
              En utilisant le site uptogo.fr, l'utilisateur s'engage à effectuer les activités suivantes:
              1. S'ils le souhaitent, les utilisateurs peuvent s'inscrire sur le site et créer un compte. L'inscription est obligatoire pour vendre et pour les utilisateurs qui
              souhaitent publier des publicités. Pour créer le compte, l'utilisateur peut alternativement :<br />
              <ul className="mt-1">
                <li>remplir le formulaire approprié en fournissant toutes les données d'inscription requises; ou</li>
                <li>accéder à son compte enregistré sur un média social (par exemple, Facebook) via le site.</li>
              </ul>
              En utilisant cette deuxième fonctionnalité, l'utilisateur reconnaît et accepte que UPTOGO MEDIAS ait accès au site, le publie sur son site et stocke dans ses archives certaines informations.
            </CardText>
          </Card>
        </Col>
      </Row>    
    </Fragment>
  )
}

export default CGV