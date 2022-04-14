import { Search } from 'react-feather'
import { Card, CardBody, CardText, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

const FaqFilter = ({ searchTerm, setSearchTerm, getFAQData }) => {
  const handleFaqFilter = e => {
    setSearchTerm(e.target.value)
    getFAQData(e.target.value)
  }

  return (
    <div id='faq-search-filter'>
      <Card
        className='faq-search'
        style={{
          backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`
        }}
      >
        <CardBody className='text-center'>
          <h2 className='text-primary'>Comment pouvons-nous vous aider ?</h2>
          <Form className='faq-search-input' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input value={searchTerm} onChange={e => handleFaqFilter(e)} placeholder='recherche' />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default FaqFilter
