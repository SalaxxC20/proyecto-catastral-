import Login from '@/app/db/querys'
export default async function Indexpage(){
  
  return(
    
    <div>
      <h1>{JSON.stringify(await Login())}</h1>
    </div>
  )

}