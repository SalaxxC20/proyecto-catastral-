import * as pg from 'pg'
export const con = new pg.Client({
    host:'Localhost',
    user:'postgres',
    port:'5432',
    password:'Julisal20',
    database: 'Catastral'
})

con.connect()
.then(()=>console.log("conexion exitosa"))
.catch((err)=>console.log(err))

