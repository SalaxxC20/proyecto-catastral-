import {con} from "./db/conn";
export default async function Indexpage(){
  const conexion= con
  return(
    <div>
      <h1>Index</h1>
    </div>
  )
}