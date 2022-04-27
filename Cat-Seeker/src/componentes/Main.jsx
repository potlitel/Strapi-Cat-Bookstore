import { Input } from '@chakra-ui/react'
import '../css/style.css'

function App() {

  return (
      
    <div>          
          <Input htmlSize={4} size='lg' width='lg' variant='outline' placeholder='Busca una raza de gatos' onSubmit={() => console.log('aaa')}/>  
    </div>
  )
}

export default App
