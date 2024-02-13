import { con } from "./conn";

export default async function login(){
    const usuarios = new Promise((resolve, reject) => {
        con.query("Select * from users",(err,rest)=>{
            if (err)reject(err)
            resolve(JSON.stringify(rest.rows))
        })
    })
    const arrayUsuarios = JSON.parse(await usuarios)

    arrayUsuarios.forEach(usuario => {
        const email = usuario.email;
        const contraseña = usuario.contrasenia;

        // Hacer lo que necesites con el email y la contraseña
        console.log("Email:", email);
        console.log("Contraseña:", contraseña);

        
    });
    
    return arrayUsuarios[0]

}