import {useForm} from 'react-hook-form'


function Formulario() {
  const { register } = useForm();
  
  return (
    <form>
        <label htmlFor="Coreo">Correo Electronico</label>
        <input type="email" {...register("Correo")}/>

        <label htmlFor="contraseña">Contraseña</label>
        <input type="password"{...register("Contraseña")} />

        <button>Ingresar</button>
    </form>
  )
}
export default Formulario

