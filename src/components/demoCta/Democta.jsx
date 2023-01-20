import React from 'react'
import HubspotForm from 'react-hubspot-form'
import './democta.css'

const Democta= () => {
  return (
    <HubspotForm
    portalId='517848'
    formId='28b18d61-b4b4-43a9-840b-e6082b6e0b67'
    onSubmit={() => console.log('Submit!')}
    onReady={(form) => console.log('Form ready!')}
    loading={<div>Loading...</div>}
    />
  )
}

export default Democta
