import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
import Main from './componentes/Main'
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
