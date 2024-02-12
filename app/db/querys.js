import { con } from "./conn";

export default async function login(){
    const usuarios = new Promise((resolve, reject) => {
        con.query("Select * from users",(err,rest)=>{
            if (err)reject(err)
            resolve(JSON.stringify(rest.rows))
        })
    })
    const arrayUsuarios = JSON.parse(await usuarios)
    return arrayUsuarios[0]
    
}