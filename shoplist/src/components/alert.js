import React from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function alert (){
    const options = {
        position: 'bottom center',
        timeout: 5000,
        offset: '30px',
        transition: 'scale'
      }
      const alert = () => (
        <AlertProvider template={AlertTemplate} {...options}>
          
        </AlertProvider>
      )
}

export default alert;