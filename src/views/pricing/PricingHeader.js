import { CustomInput } from 'reactstrap'

const PricingHeader = ({ duration, setDuration }) => {
  const onChange = e => {
    if (e.target.checked) {
      setDuration('yearly')
    } else {
      setDuration('monthly')
    }
  }

  return (
    <div className='text-center'>
      <p className='mb-2 pb-75'>
        Un abonnement unique pour une diffusion de vos annonces sur nos 5 sites d'annonces !
      </p>
      <div className='d-flex align-items-center justify-content-center mb-5 pb-50'>
        <h6 className='mr-1 mb-0'>Sans engagement</h6>
        <CustomInput id='plan-switch' type='switch' checked={duration === 'yearly'} onChange={onChange} />
        <h6 className='ml-50 mb-0'>Avec engagement (Economisez 1 mois)</h6>
      </div>
    </div>
  )
}

export default PricingHeader
