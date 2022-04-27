import { Input } from '@chakra-ui/react'
import '../css/style.css'

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate')
    }
}
  
function App() {

  return (
      
    <div>          
          <Input htmlSize={4} size='lg' width='lg' variant='outline' placeholder='Busca una raza de gatos' onKeyDown={event => {
                if (event.key === 'Enter') {
                  console.info('do validate')
                }
              }}/>  
    </div>
  )
}

export default App
