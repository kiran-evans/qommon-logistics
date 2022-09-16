import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Map />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
