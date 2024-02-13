import Login from '@/app/db/querys'
import Formulario from './formulario'

export default async function Indexpage(){  
  return(

    <div>
      <Formulario/>
      <h1>{JSON.stringify(await Login())}</h1>
      
    </div>

    
  )

}