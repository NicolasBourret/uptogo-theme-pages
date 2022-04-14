import { useState } from "react"
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap'
import { PhoneCall, Mail } from 'react-feather'

const PricingContact = () => {
  const [phone, setPhone] = useState("")
  
  return (
    <div id='faq-contact'>
      <Row className='mt-5 pt-75'>
        <Col className='text-center' sm='12'>
          <h2>Vous avez encore une question ?</h2>
          <p className='mb-3'>
            Si vous ne trouvez pas une question dans notre FAQ, vous pouvez toujours nous contacter. Nous vous répondrons sous peu ! 
          </p>
        </Col>
        <Col sm='6'>
          <Card className='text-center bg-light-secondary shadow-none py-1'>
            <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <PhoneCall size={18} />
              </div>
              <h4>Je souhaite être rappelé(e)</h4>
              <Input type="text" placeholder="Votre numéro" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Button.Ripple color="primary">Envoyer</Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card className='text-center bg-light-secondary shadow-none py-1'>
            <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <Mail size={18} />
              </div>
              <h4>commerce@uptogo.fr</h4>
              <span className='text-body'>Le meilleur moyen d'obtenir une réponse plus rapidement !</span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PricingContact
