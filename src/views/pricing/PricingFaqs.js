import { Row, Col } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const PricingFaqs = ({ data }) => {
  return (
    <div className='pricing-faq'>
      <p className='text-center'>Les questions les plus fréquements posées</p>
      <Row className='my-2'>
        <Col className='mx-auto' sm='12' lg={{ size: 10, offset: 2 }}>
          <AppCollapse type='margin' data={data} titleKey='question' contentKey='ans' accordion />
        </Col>
      </Row>
    </div>
  )
}

export default PricingFaqs
